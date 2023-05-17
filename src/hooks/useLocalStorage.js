import { useState, useEffect } from "react";

const localStorageValue = (key, intitalValue) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : intitalValue;
}

const useLocalStorage = (key, defaultValue = []) => {
    const intitalValue = localStorageValue(key, defaultValue);
    const [value, setValue] = useState(intitalValue);

    useEffect(() => {
        console.log("effect del nostro hook");
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, setValue, key]);

    return [value, setValue];
}

export default useLocalStorage;