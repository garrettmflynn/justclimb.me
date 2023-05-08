import { CommonElement } from '../../external/commonwealth/index.js'
import listItem from '../components/li.js'
import { get, getAllKeys } from '../storage.js'

import * as colors from '../colors'

import 'https://cdn.plot.ly/plotly-2.20.0.min.js' // Use plotly
import { getScore } from '../metrics.js'

export class HistoryPage extends CommonElement {


    constructor(info?: any) {
        super(info)
    }

    dates() {
        return getAllKeys()
        .filter(str => {
            try {
                const date = new Date(str)
                return date instanceof Date && !isNaN(date);
            } catch {}
        })
        .sort((o1,o2) => new Date(o2) - new Date(o1)) as string[] // Sort dates chronologically
    }
    
    
    getSplit(reverse = false) {
        const dates = reverse ? [...this.dates()].reverse() : this.dates()
        const entries = dates.map(date => get(date))

        let grades: string[] = []
        let split = entries.map((arr, i) => {
            
            const acc: any = {}
            arr.forEach(o => {
                if (!grades.includes(o.value)) grades.push(o.value)
                if (!(o.value in acc)) acc[o.value] = 1
                else acc[o.value] ++
            })

            return acc
        }, {})

        return {
            dates,
            grades,
            split
        }
    }

    score() {
        // const { grades, split } = this.getSplit()
        const dates = [...this.dates()].reverse() //.reverse()
        const entries = dates.map(date => get(date))
        const scores = entries.map(getScore)
        const averages = entries.map(arr => arr.reduce((acc, e) => acc + parseInt(e.value.slice(1)), 0) / arr.length)

        const scoreLine = {
            x: dates,
            y: scores,
            name: 'Total Score',
            mode: 'lines',
            line: {
                color: 'black',
                width: 2
            }
          }

        const averageLine = {
            x: dates,
            y: averages,
            name: 'Average Difficulty',
            yaxis: 'y2',
            mode: 'lines',
            line: {
                color: 'darkgray',
                width: 1
            }
          }


          var layout = { 
            type: 'scatter',
            mode: 'lines',
            title: 'Score Overview',
            xaxis: {
                type: 'category',
            },
            yaxis: {
                // title: scoreLine.name,
                rangemode: 'tozero'
            },
            yaxis2: {
                // title: averageLine.name,
                overlaying: 'y',
                side: 'right',
                rangemode: 'tozero'
              }
        };

          const div = document.createElement('div')
          
          setTimeout(() => Plotly.newPlot(div, [ scoreLine , averageLine ], layout, {responsive: true}), 10);
          return div
    }

    grades() {
        const { grades, split, dates } = this.getSplit(true)

        const data = grades.sort((a,b) => {
            return parseInt(a.slice(1)) - parseInt(b.slice(1))
        }).map((v) => {
            return {
                x: dates,
                y: split.map(o => o[v] || 0),
                name: v,
                marker: {
                    color: colors[v]
                },
                type: 'bar'
              }
        })


          var layout = { 
            barmode: 'stack', 
            title: 'Grade Breakdown',
            xaxis: {
                type: 'category',
            },
            yaxis: {
                title: '# of Climbs'
            }
        };

          const div = document.createElement('div')
          
          setTimeout(() => Plotly.newPlot(div, data, layout, {responsive: true}), 10);
          return div
    }

    list() {
        const dates = this.dates()
        const container = document.createElement('div')

        container.append(...dates.map(date => {

            const entries = get(date)

            const container = document.createElement('div')
            const header = document.createElement('h3')
            header.style.marginBottom = '0px'
            header.innerText = date

            const description = document.createElement('small')
            const averageGrade = entries.reduce((acc, e) => acc + parseInt(e.value.slice(1)), 0) / entries.length
            description.innerText = `${entries.length} climbs @ V${averageGrade.toFixed(1)}`

            const list = document.createElement('ul')

            entries.forEach(entry => {
                const li = listItem(entry)
                list.append(li)
            })


            container.append(header, description, list)
            return container
        }))
        

        return container
    }

    render() {
        
        return [
            this.score,
            this.grades,
            this.list,
        ]
        
    }
}


let name = "history-page"
customElements.define(name, HistoryPage);

export default HistoryPage