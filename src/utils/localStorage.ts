export const loadState = (itemKey) => {
    try {
        const serializedState = localStorage.getItem(itemKey)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

export const saveState = (key, state) => {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
}
