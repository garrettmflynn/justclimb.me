import { CommonElement, Commons } from '../../external/commonwealth/index.js'
import ButtonComponent from '../button/index.js'
import HistoryComponent from '../history/index.js'
import { getScore } from '../metrics.js'
import { defaultGradeRange } from './settings.js'
import * as colors from '../colors'

export class ScorePage extends CommonElement {

    #history = new HistoryComponent()

    constructor(info?: any) {
        super(info)
        this.#history.initialize() // Ensures score will propertly re-render
    }

    history = () => this.#history // Only ever render the same component (fixes re-rendering issue)

    buttons = () => {

        let range = localStorage.getItem('gradeRange') || defaultGradeRange
        const container = document.createElement('div')
        container.classList.add('grades')

        const grades = Array.from({length: parseInt(range) + 1}, (_, i) => `V${i}`)
        const buttons = grades.map(grade => {
            const gradeEl = new ButtonComponent({ grade })
            gradeEl.classList.add('grade', grade)

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
        const h3 = document.createElement('h3')
        h3.style.fontSize = '100px'
        h3.style.margin = '0'
        h3.style.marginBottom = '20px'
        h3.style.textAlign = 'center'

        const history = this.history()
        const score = getScore(history.latest)
        h3.innerText = `${score}`
        return h3
    }

    render() {
        
        return [
            this.score,
            this.buttons,
            this.history
        ]
        
    }
}


let name = "score-page"
customElements.define(name, ScorePage);

export default ScorePage