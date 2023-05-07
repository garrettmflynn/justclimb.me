import { CommonElement } from '../../external/commonwealth/index.js'
import listItem from '../components/li.js'
import { get } from '../storage.js'

export class HistoryPage extends CommonElement {


    constructor(info?: any) {
        super(info)
    }

    list() {
        const dates = Array.from({ length: localStorage.length }, (_, i) => localStorage.key( i )) as string[]
        console.log(dates)

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
            this.list,
        ]
        
    }
}


let name = "history-page"
customElements.define(name, HistoryPage);

export default HistoryPage