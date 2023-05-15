import { Commons } from "../external/commonwealth";
import { getScore } from "./metrics";
import { getItem, setItem } from "./storage";
// import { EntryType } from "./storage";

const defaultGradeRange = '7'
export const getRange = () => getItem('gradeRange') || defaultGradeRange
export const setRange = (v) => setItem('gradeRange', v)

export const globalCommons = new Commons()
globalCommons.add('latest', [])
globalCommons.add('score', function() {
    return getScore(this.latest) // Automatically translate latest array into a score
})

globalCommons.add('range', getRange())


export default globalCommons.nodes