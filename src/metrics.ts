import { EntryType } from "./storage"

export const getScore = (entries: EntryType[]) => {
    const scores = entries.map(o => parseInt(o.value.slice(1)))
    const score = scores.reduce((acc, v) => acc + v + 1, 0)
    return score
}