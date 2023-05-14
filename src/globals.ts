import { Commons, createEffect } from "../external/commonwealth";
import { getScore } from "./metrics";
// import { EntryType } from "./storage";


const store = {
    score: 0,
    // latest: [] // NOTE: Cannot be set here
}

const globals = new Commons(store)
globals.add('latest', [])
globals.add('score', function() {
    return getScore(this.latest) // Automatically translate latest array into a score
})

createEffect(() => {
    console.log('Score changed', globals.nodes.score())
})

export default globals.nodes