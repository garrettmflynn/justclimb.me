
import PageComponent from './pages/index.js'
import { ScorePage } from './pages/score'
import { SettingsPage } from './pages/settings'
import { HistoryPage } from './pages/history'

import './globals'
import { createEffect } from '../external/commonwealth/index.js'
import globals from './globals'


const scorePage = new ScorePage()
createEffect(() => {
    console.log('Latest is updated')
    scorePage.score(globals.latest) // Update score whenever global score changes
})

const settingsPage = new SettingsPage()

const historyPage = new HistoryPage()

const pageElement = new PageComponent({
    header: 'JustClimb',
    pages: [
        { label: 'Score', element: scorePage }, // NOTE: Cannot be in an object, since this will try iterating through the page
        { label: 'History', element: historyPage},
        { label: 'Settings', element: settingsPage}
    ]
})

document.body.append(pageElement)