import listItem from "./li";

export function list({ entries, onDelete }) {

    const list = document.createElement('ul')
    list.innerHTML = "";
    let removed: number[] = []
    entries.forEach((entry, idx) => {
        const item = listItem(entry)

        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'Delete'
        deleteButton.style.marginLeft = '10px'
        deleteButton.onclick = () => {
            const shift = removed.reduce((acc, v) => {
                if (v < idx) acc++
                return acc
            }, 0)
            const value = entries.splice(idx - shift, 1)
            removed.push(idx)
            item.remove()
            onDelete(idx, value, entries)
        }

        item.appendChild(deleteButton)
        list.appendChild(item);
    });

    return list
}

export default list