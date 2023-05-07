import { CommonElement } from '../../external/commonwealth/index.js'

export class SettingsPage extends CommonElement {


    constructor(info?: any) {
        super(info)
    }

    clear() {
        const button = document.createElement('button')
        button.innerText = 'Clear All History (MAKE SURE YOU WANT THIS)'
        button.onclick = () => {
            localStorage.clear()
            // this.onClear(true)
            window.location.reload() // Reload the page because pages aren't responsive to a clear event
        }

        return button
    }

    render() {
        
        return [
            this.clear,
        ]
        
    }
}


let name = "settings-page"
customElements.define(name, SettingsPage);

export default SettingsPage