import { Commons, createEffect } from '../external/commonwealth/index.js'
import ButtonComponent from './button/index.js'
import HistoryComponent from './history/index.js'

// import EntriesComponent from './list/index.js'
// const todoComponent = new EntriesComponent()
// document.body.appendChild(todoComponent)

const scoreElement = document.querySelector('#score') as HTMLHeadingElement
const historyContainer = document.querySelector('#history') as HTMLDivElement
const buttonContainer = document.querySelector('#buttons') as HTMLDivElement

const historyElement = new HistoryComponent()

const grades = Array.from({length: 18}, (_, i) => `V${i}`)
const buttons = grades.map(grade => new ButtonComponent({ grade }))

buttonContainer.append(...buttons)
historyContainer.appendChild(historyElement)

const commons = new Commons()

let instantiated = false
buttons.forEach(o => {
    commons.add(`${o.grade}Clicked`, () => {
        const value = o.onClick() // Will get every time it is run
        if (instantiated) {
            historyElement.addToday(value)
        }
    })
})

instantiated = true

createEffect(() => {
    const scores = historyElement.latest.map(o => new Number(o.value.slice('1')))
    const score = scores.reduce((acc, v) => acc + v + 1, 0)
    scoreElement.innerHTML = score
})
