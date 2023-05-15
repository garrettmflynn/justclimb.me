// import * as todo from './funcs'
import { CommonElement } from "../../external/commonwealth/index";
import { EntryType } from "../storage";
import * as storage from '../storage'
import list from '../components/list'


class HistoryComponent extends CommonElement {
constructor(info?: any) {
        super(info)
        this.latest = storage.getToday()
        this.initialize()
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
            this.latest = storage.getToday() // Trigger a re-render of the list         
        }
    }

    addToday(value: any) {
        this.add(storage.today(), value)
    }

    latest: EntryType[] = storage.getToday() // Can listen for the latest entries

    list(entries: EntryType[] = []) {
        
        const res = list({
            entries,
            onDelete: (_, __, entries) => {
                const today = storage.today()
                if (entries.length) storage.set(today, entries) 
                else storage.remove(today)
                this.latest = storage.getToday()  // Trigger a re-render of the list
            }
        });

        return res
    }

    $latestList() {
        this.list(this.latest)
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