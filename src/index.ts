
import PageComponent from './pages/index.js'
import { ScorePage } from './pages/score'
import { SettingsPage } from './pages/settings'
import { HistoryPage } from './pages/history'


const scorePage = new ScorePage()
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