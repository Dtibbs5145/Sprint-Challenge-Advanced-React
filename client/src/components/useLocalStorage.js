import React, { useState } from 'react';

const useLocalStorage = (key, initVal) => {
    const [storedVal, setStoredVal] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initVal;
    })

    const setVal = value => {
        setStoredVal(value)
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedVal, setVal];
};

export default useLocalStorage;