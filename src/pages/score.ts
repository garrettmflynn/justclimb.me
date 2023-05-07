import { CommonElement, Commons } from '../../external/commonwealth/index.js'
import ButtonComponent from '../button/index.js'
import HistoryComponent from '../history/index.js'


export class ScorePage extends CommonElement {

    #history = new HistoryComponent()

    constructor(info?: any) {
        super(info)
        this.#history.initialize() // Ensures score will propertly re-render
    }

    history = () => this.#history // Only ever render the same component (fixes re-rendering issue)

    buttons = () => {
        const container = document.createElement('div')
        container.style.textAlign = 'center'

        const grades = Array.from({length: 18}, (_, i) => `V${i}`)
        const buttons = grades.map(grade => new ButtonComponent({ grade }))

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
        const scores = history.latest.map(o => parseInt(o.value.slice(1)))
        const score = scores.reduce((acc, v) => acc + v + 1, 0)
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