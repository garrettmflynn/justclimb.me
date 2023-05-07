import { EntryType } from "../storage";

export const listItem = (entry: EntryType) => {
    const listItem = document.createElement("li");
    const timestamp = document.createElement('small')
    timestamp.innerText = entry.timestamp

    const value = document.createElement('b')
    value.innerText = entry.value
    listItem.append(value, timestamp);
    listItem.style.cursor = 'delete'
    return listItem
}

export default listItem