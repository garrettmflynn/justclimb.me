import { CommonElement } from '../../external/commonwealth/index.js'
import { getRange, setRange } from '../globals.js'

import json from '../../package.json' assert {type: 'json'}

export class SettingsPage extends CommonElement {


    constructor(info?: any) {
        super(info)
        this.initialize()
        setRange(getRange())
    }

    onRangeUpdate(value: string) {
        return value
    }

    range () {
        let container = document.createElement('div')
        container.classList.add('slider')
        const readout = document.createElement('small')
        const slider = document.createElement('input')
        slider.type = 'range'
        slider.min = '0'
        slider.max = '17'
        slider.oninput = () => readout.innerHTML = slider.value; // Display the slider value
        slider.onchange = () => this.onRangeUpdate(parseInt(slider.value))
        readout.innerHTML = slider.value = getRange()
        container.append(slider, readout)
        return container

    }

    version() {
        const version = document.createElement('small')
        version.classList.add('version')
        version.innerText = json.version
        return version
    }

    section() {
        const el = document.createElement('section')
        el.append(this.range(), this.version())
        return el
    }


    render() {

        return this.section()
        
    }
}


let name = "settings-page"
customElements.define(name, SettingsPage);

export default SettingsPage