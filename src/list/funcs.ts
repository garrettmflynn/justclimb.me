export const entries = [{
    title: 'Learn Commonwealth',
    completed: false
}]

export const filter = 'all'

export function filteredEntries(this: any) {
    const currentFilter = this.filter
    const currentEntries = this.entries
    if (currentFilter === 'all') return currentEntries;
    else if (currentFilter === 'active') return currentEntries.filter((entry) => !entry.completed);
    else return currentEntries.filter((entry) => entry.completed);
}

export function entryCount(this: any) {
    return this.entries.length;
}

export function activeEntryCount() {
    return this.entries.filter((entry) => !entry.completed).length;
}

export function completedEntryCount(this: any) {
    return this.entries.filter((entry) => entry.completed).length;
}

// Elements
export function input(this: any) {
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Add a new entry')
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.textContent = 'Add'
    form.appendChild(input)
    form.appendChild(button)

    // Hook into UI
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const entryTitle = input.value.trim();
        if (entryTitle) {
          const newEntry = { title: entryTitle, completed: false };
          this.entries = [...this.entries, newEntry]; // Since this is hidden behind an event listener, there will be no recursion...
          input.value = "";
        }
      });



    return form
}

export function filters(this: any) {
    const types = ['all', 'active', 'completed'];
    const filters = document.createElement('div')
    filters.innerHTML = types.map(type => `
        <label>
            <input type="radio" name="filter" value="${type}" ${this.filter === type ? 'checked' : ''} />
            ${type[0].toUpperCase() + type.slice(1)}
        </label>
    `).join(' ');
    filters.addEventListener("change", (event) => {
        this.filter = (event.target as HTMLInputElement).value;
    });
    return filters
}

export function list(this: any) {
    const list = document.createElement("ul");
    const currentEntries = this.filteredEntries()
    list.innerHTML = "";
    currentEntries.forEach((entry, index) => {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = entry.completed;
        checkbox.addEventListener("change", () => {
            this.entries[index].completed = checkbox.checked;
            this.entries = [...this.entries];
        });
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + entry.title));
        listItem.appendChild(label);
        list.appendChild(listItem);
    });

    return list;
}

export function counter(this: any) {
    const div = document.createElement("div");
    div.textContent = `
        Total: ${this.entryCount()}, 
        Active: ${this.activeEntryCount()}, 
        Completed: ${this.completedEntryCount()}
    `;

    return div
}