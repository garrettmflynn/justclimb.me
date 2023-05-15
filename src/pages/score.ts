import { CommonElement, Commons } from '../../external/commonwealth/index.js'
import ButtonComponent from '../components/button/index.js'
import HistoryComponent from '../history/index.js'
import { getAverageGrade, getScore } from '../metrics.js'
import * as colors from '../colors'
import { EntryType } from '../storage.js'
import { getRange } from '../globals.js'

export class ScorePage extends CommonElement {

    history = new HistoryComponent()

    constructor(info?: any) {
        super(info)
        this.initialize()
    }

    // history = () => this.#history // Only ever render the same component (fixes re-rendering issue)

    buttons (range = getRange()) {

        const container = document.createElement('div')
        container.classList.add('grades')

        const grades = Array.from({length: parseInt(range) + 1}, (_, i) => `V${i}`)
        const buttons = grades.map((grade, i) => {
            const gradeEl = new ButtonComponent({ grade })
            gradeEl.classList.add('grade', grade)
            gradeEl.setAttribute('tabindex', `${i}`)

            const color = colors[grade]
            const saturation = parseInt(colors[grade].split(',')[2].slice(0, -2).trim())
            const textColor = saturation <= 60 ? 'white' : 'black'
            gradeEl.style.setProperty('--accent-color', color)
            gradeEl.style.setProperty('--text-color', textColor)

            const randomPercentages = Array.from({length: 10}, () => `${Math.floor(30 + 70 * Math.random())}%`)
            randomPercentages.forEach((pct, i) => {
                gradeEl.style.setProperty(`--random-percent-${i}`, pct)
            })

            return gradeEl
        })

        const commons = new Commons()

        let instantiated = false
        buttons.forEach(o => {
            commons.add(`${o.grade}Clicked`, () => {
                const value = o.onClick() // Will get every time it is run
                if (instantiated) this.history.addToday(value)
            })
        })

        instantiated = true

        container.append(...buttons)

        return container
    }

    // Get local latest as the default
    score(entries: EntryType[] = []) {
        this.history.list(entries)
        const container = document.createElement('div')
        container.classList.add('score')
        const el = document.createElement('h2') as HTMLHeadingElement
        const subel = document.createElement('small') as HTMLElement
        container.append(el, subel)
        const score = getScore(entries)
        el.innerText = `${score}`
        subel.innerText =  `${entries.length} Climbs @ V${getAverageGrade(entries).toFixed(2)}`
        return container
    }

    section() {
        const el = document.createElement('section')
        const buttons = this.buttons()
        el.append(buttons, this.history)
        return el
    }

    render() {
        
        return [
            this.score,
            this.section
            // this.buttons,
            // this.history
        ]
        
    }
}


let name = "score-page"
customElements.define(name, ScorePage);

export default ScorePage