import { CommonElement } from '../../external/commonwealth/index.js'
import { clear, getItem, setItem } from '../storage.js'

export const defaultGradeRange = '7'

const get = () => getItem('gradeRange') || defaultGradeRange
const set = (v) => setItem('gradeRange', v)

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
            setItem('gradeRange', slider.value)
        }

        slider.onchange = () => window.location.reload() // No mechanism for updating other pages

        readout.innerHTML = slider.value = get()



        container.append(slider, readout)

        return container

    }

    render() {
        
        return [
            this.range
        ]
        
    }
}


let name = "settings-page"
customElements.define(name, SettingsPage);

export default SettingsPage