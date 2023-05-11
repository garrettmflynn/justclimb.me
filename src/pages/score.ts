import { CommonElement, Commons } from '../../external/commonwealth/index.js'
import ButtonComponent from '../button/index.js'
import HistoryComponent from '../history/index.js'
import { getAverageGrade, getScore } from '../metrics.js'
import { defaultGradeRange } from './settings.js'
import * as colors from '../colors'
import { getItem } from '../storage.js'

export class ScorePage extends CommonElement {

    #history = new HistoryComponent()

    constructor(info?: any) {
        super(info)
        this.#history.initialize() // Ensures score will propertly re-render
    }

    history = () => this.#history // Only ever render the same component (fixes re-rendering issue)

    buttons = () => {

        let range = getItem('gradeRange') || defaultGradeRange
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
        const history = this.history()
        buttons.forEach(o => {
            commons.add(`${o.grade}Clicked`, () => {
                const value = o.onClick() // Will get every time it is run
                if (instantiated) history.addToday(value)
            })
        })

        instantiated = true

        container.append(...buttons)

        return container
    }

    score() {
        const container = document.createElement('div')
        container.classList.add('score')
        const el = document.createElement('h2') as HTMLHeadingElement
        const subel = document.createElement('small') as HTMLElement
        container.append(el, subel)

        const { latest: entries } = this.history()
        
        const score = getScore(entries)
        el.innerText = `${score}`
        subel.innerText =  `${entries.length} Climbs @ V${getAverageGrade(entries).toFixed(2)}`

        return container
    }

    section() {
        const el = document.createElement('section')
        const buttons = this.buttons()
        const history = this.history()
        el.append(buttons, history)
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