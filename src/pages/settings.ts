import { CommonElement } from '../../external/commonwealth/index.js'

export const defaultGradeRange = '7'


const initialize = () => {
    const range = localStorage.getItem('gradeRange') || defaultGradeRange
    localStorage.setItem('gradeRange', range)
}

const get = () => localStorage.getItem('gradeRange') || defaultGradeRange
const set = (v) => localStorage.setItem('gradeRange', v)

export class SettingsPage extends CommonElement {


    constructor(info?: any) {
        super(info)

        set(get())
    }

    range () {
        let container = document.createElement('div')
        container.classList.add('slider')
        const readout = document.createElement('small')
        const slider = document.createElement('input')
        slider.type = 'range'
        slider.min = '0'
        slider.max = '17'
        

        slider.oninput = () => {
            readout.innerHTML = slider.value; // Display the slider value
            localStorage.setItem('gradeRange', slider.value)
        }

        slider.onchange = () => window.location.reload() // No mechanism for updating other pages

        readout.innerHTML = slider.value = get()



        container.append(slider, readout)

        return container

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
            this.range
        ]
        
    }
}


let name = "settings-page"
customElements.define(name, SettingsPage);

export default SettingsPage