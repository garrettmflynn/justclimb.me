export type EntryType = {
    value: string,
    timestamp: string
}


export const get = (key?: string): EntryType[] => {
    if (!key) return []
    let entries = localStorage.getItem(key) || []
    if (Array.isArray(entries)) return entries
    else return JSON.parse(entries)
}

export const set = (key: string, entries: any | any[]) => {
    localStorage.setItem(key, JSON.stringify(entries))
}

export const today = () => new Date().toISOString().split('T')[0]

export const getToday = () => get(today())
