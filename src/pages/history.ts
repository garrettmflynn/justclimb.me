import { CommonElement } from '../../external/commonwealth/index.js'
import listItem from '../components/li.js'
import { get } from '../storage.js'

import * as colors from '../colors'

import 'https://cdn.plot.ly/plotly-2.20.0.min.js' // Use plotly

export class HistoryPage extends CommonElement {


    constructor(info?: any) {
        super(info)
    }

    entries() {
        return Array.from({ length: localStorage.length }, (_, i) => localStorage.key( i ))
        .filter(str => str?.split('-').length === 3)
        .sort((o1,o2) => new Date(o2) - new Date(o1)) as string[] // Sort dates chronologically
    }


    plot() {
        const dates = this.entries()
        const entries = dates.map(date => get(date))

        let grades: string[] = []
        let gradeSplit = entries.map((arr, i) => {
            
            const acc: any = {}
            arr.forEach(o => {
                if (!grades.includes(o.value)) grades.push(o.value)
                if (!(o.value in acc)) acc[o.value] = 1
                else acc[o.value] ++
            })

            return acc
        }, {})

        const data = grades.sort((a,b) => {
            return parseInt(a.slice(1)) - parseInt(b.slice(1))
        }).map((v) => {
            return {
                x: dates,
                y: gradeSplit.map(o => o[v] || 0),
                name: v,
                marker: {
                    color: colors[v]
                },
                type: 'bar'
              }
        })


          var layout = { 
            barmode: 'stack', 
            title: 'Climb History',
            xaxis: {
                type: 'category',
                title: 'Date',
            },
            yaxis: {
                title: '# of Climbs'
            }
        };

          const div = document.createElement('div')
          
          setTimeout(() => Plotly.newPlot(div, data, layout), 10);
          return div
    }

    list() {
        const dates = this.entries()
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
            this.plot,
            this.list,
        ]
        
    }
}


let name = "history-page"
customElements.define(name, HistoryPage);

export default HistoryPage