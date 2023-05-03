import * as todo from './funcs'
import { CommonElement } from "../../external/commonwealth/index";

class EntriesComponent extends CommonElement {
    constructor(info: any) {
        super(info)
    }

    entries = todo.entries
    filter = todo.filter
    filteredEntries = todo.filteredEntries
    entryCount = todo.entryCount
    activeEntryCount = todo.activeEntryCount
    completedEntryCount = todo.completedEntryCount
    input = todo.input
    filters = todo.filters
    counter = todo.counter
    list = todo.list

    render() {
        return [
            this.input,
            this.filters,
            this.list,
            this.counter,
        ]
    }
}

let name = "todo-list"
customElements.define(name, EntriesComponent);

export default EntriesComponent