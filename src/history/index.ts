// import * as todo from './funcs'
import { CommonElement } from "../../external/commonwealth/index";
import { EntryType } from "../storage";
import * as storage from '../storage'
import list from '../components/list'


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
        
        const today = storage.today()
        const entries = this.latest = storage.getToday()

        const res = list({
            entries,
            onDelete: (_, __, entries) => {
                if (entries.length) storage.set(today, entries) 
                else storage.remove(today)
                this.list(true) // Trigger a re-render of the list           
            }
        });

        return res
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