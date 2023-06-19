import { useState, useEffect } from "react";
const KEY = "cart";

const localStorageValue = (intitalValue) => {
    const item = window.localStorage.getItem(KEY);
    return item ? JSON.parse(item) : intitalValue;
}

const useCartStorage = (defaultValue = []) => {
    const intitalValue = localStorageValue(defaultValue);
    const [cartStorage, setCartStorage] = useState(intitalValue);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(cartStorage));
    }, [cartStorage, setCartStorage]);

    return [ cartStorage, setCartStorage];
}

export default useCartStorage;