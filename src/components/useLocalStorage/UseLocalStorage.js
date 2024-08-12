import { useState, useEffect } from "react";

export function useLocalStorage(storageKey, initialValue) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(storageKey);
        if (localValue != null) return JSON.parse(localValue);
        return initialValue;
    })

    function storeValue(data) {
        localStorage.setItem(storageKey, JSON.stringify(data))
    }

    useEffect(() => {
        storeValue(value);
    }, [value, storageKey])

    return [value, setValue]
}