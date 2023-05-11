export type EntryType = {
    value: string,
    timestamp: string
}


var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds

export const get = (key?: string): EntryType[] => {
    if (!key) return []
    let entries = localStorage.getItem(key) || []
    if (Array.isArray(entries)) return entries
    else return JSON.parse(entries)
}


export const getAllKeys = () => {
    return Array.from({ length: localStorage.length }, (_, i) => localStorage.key( i ))
}

export const clear = () => {
    return localStorage.clear()
}

export const remove = (key: string) => {
    console.error('REMOVE!')
    localStorage.removeItem(key)
}

export const setItem = (key: string, value: string) => {
    return localStorage.setItem(key, value)
}
export const getItem = (key: string) => {
    return localStorage.getItem(key)
}

export const set = (key: string, entries: any | any[]) => {
    localStorage.setItem(key, JSON.stringify(entries))
}

export const today = () => new Date(Date.now() - tzoffset).toISOString().split('T')[0]

export const getToday = () => get(today())