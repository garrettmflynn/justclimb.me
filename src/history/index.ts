// import * as todo from './funcs'
import { CommonElement } from "../../external/commonwealth/index";

const get = (key?: string) => {
    if (!key) return []
    let entries = localStorage.getItem(key) || []
    if (typeof entries === 'string') entries = JSON.parse(entries)
    return entries
}

const set = (key: string, entries: any[]) => {
    localStorage.setItem(key, JSON.stringify(entries))
}

const getToday = () => new Date().toISOString().split('T')[0]

class HistoryComponent extends CommonElement {
    constructor(info: any) {
        super(info)
    }

    get = get

    add(key, value) {

        if (key && value){

            let entries = get(key) // Will only pull, no updates

            entries.push({
                value,
                timestamp: (new Date()).toLocaleTimeString('en-US')
            })

            set(key, entries)   
            this.list(true) // Trigger a re-render of the list         
        }
    }

    addToday(value) {
        const key = getToday()
        this.add(key, value)
    }

    latest = [] // Can listen for the latest entries

    list() {
        const list = document.createElement("ul");

        const currentTime = getToday()
        const currentEntries = this.latest = get(currentTime)

        list.innerHTML = "";
        currentEntries.forEach((entry, index) => {
            const listItem = document.createElement("li");
            const label = document.createElement("label");
            label.appendChild(document.createTextNode(entry.timestamp));
            label.appendChild(document.createTextNode(": " + entry.value));
            listItem.style.cursor = 'delete'
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'Delete'
            deleteButton.style.marginLeft = '10px'
            deleteButton.onclick = () => {
                currentEntries.splice(index, 1)
                set(currentTime, currentEntries) 
                this.list(true) // Trigger a re-render of the list           
            }
            listItem.appendChild(label);
            listItem.appendChild(deleteButton)
            list.appendChild(listItem);
        });
    
        return list;
    }

    render() {
        return [
            this.list
        ]
    }
}

let name = "climb-history"
customElements.define(name, HistoryComponent);

export default HistoryComponent