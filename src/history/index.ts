// import * as todo from './funcs'
import { CommonElement } from "../../external/commonwealth/index";
import { listItem } from "../components/li";
import { EntryType } from "../storage";
import * as storage from '../storage'

class HistoryComponent extends CommonElement {
    constructor(info?: any) {
        super(info)
        this.latest = storage.getToday()
    }

    get = storage.get

    add(key: string, value: any) {

        if (key && value){

            let entries = storage.get(key) // Will only pull, no updates

            entries.push({
                value,
                timestamp: (new Date()).toLocaleTimeString('en-US')
            })

            storage.set(key, entries)   
            this.list(true) // Trigger a re-render of the list         
        }
    }

    addToday(value: any) {
        this.add(storage.today(), value)
    }

    latest: EntryType[] = [] // Can listen for the latest entries

    list(trigger: any) {
        const list = document.createElement("ul");

        const currentEntries = this.latest = storage.getToday()

        list.innerHTML = "";
        currentEntries.forEach((entry, index) => {
            const item = listItem(entry)

            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'Delete'
            deleteButton.style.marginLeft = '10px'
            deleteButton.onclick = () => {
                currentEntries.splice(index, 1)
                storage.set(storage.today(), currentEntries) 
                this.list(true) // Trigger a re-render of the list           
            }

            item.appendChild(deleteButton)
            list.appendChild(item);
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