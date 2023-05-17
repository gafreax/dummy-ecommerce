import { useState, useEffect } from "react";
const KEY = "cart";

const localStorageValue = (intitalValue) => {
    const item = window.localStorage.getItem(KEY);
    return item ? JSON.parse(item) : intitalValue;
}

const useCartStorage = (defaultValue = []) => {
    const intitalValue = localStorageValue(defaultValue);
    const [value, setValue] = useState(intitalValue);

    useEffect(() => {
        console.log("effect del nostro hook");
        localStorage.setItem(KEY, JSON.stringify(value));
    }, [value, setValue]);

    return [value, setValue];
}

export default useCartStorage;