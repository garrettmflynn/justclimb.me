
import PageComponent from './pages/index.js'
import { ScorePage } from './pages/score'
import { SettingsPage } from './pages/settings'
import { HistoryPage } from './pages/history'

import './globals'
import { globalCommons } from './globals'
import { setItem, today } from './storage.js'

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


// Create app-wide variables
globalCommons.add('scorePage', scorePage)
globalCommons.add('historyPage', historyPage)
globalCommons.add('settingsPage', settingsPage)

// Create the app-wide connections at the end
globalCommons.add('$latestScoreView', function () { this.scorePage.score(this.latest) } ) // Update score whenever global score changes
globalCommons.add('$latestHistoryView', function () { this.historyPage.list(this.latest) } ) // Update score whenever global score changes

globalCommons.add('$historyScoreGlobal', function () { this.latest = scorePage.history.latest } )

// Set range updates in local storage and re-generate buttons
globalCommons.add('$rangeSliderGlobalRange', function () { this.range = this.settingsPage.onRangeUpdate() } ) // Set global range from settings page
globalCommons.add('$rangeLocalStorage', function () { this.range ? setItem('gradeRange', this.range) : null })
globalCommons.add('$rangeButtonsView', function () { this.range ? this.scorePage.buttons(this.range) : null })

// Update history list on delete
globalCommons.add('$onDeleteHistoryViewAndGlobal', function () { 
    const todayDate = today()
    const { date, entries } = this.historyPage.onDelete()

    // Trigger re-render of grades and scores when deleted
    if (date && entries) {

        // NOTE: Not setting history list at the moment...
        if (date === todayDate)  this.latest = entries // Set latest here
        
        // Re-render graphs on the history page
        this.historyPage.grades(true)
        this.historyPage.score(true)
    }
})

// Service Worker Stuff

if ("serviceWorker" in navigator) {

    const workerURL = `${window.location.origin}/${window.location.pathname}/serviceWorker.js`
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register(workerURL)
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err));
    });
  }
  