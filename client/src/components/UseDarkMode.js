import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const UseDarkMode = (key, initVal) => {
    const [isDark, setIsDark] = useLocalStorage(key, initVal)

    useEffect(() => {
        isDark ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [isDark]);

    const darkMode = (e) => {
        e.preventDefault();
        setIsDark(!isDark);
        if (darkMode) {
            return false;
        }
    };

    const toggleDarkMode = () => {
        setIsDark(!isDark);
    }
    return [isDark, toggleDarkMode]
};

export default UseDarkMode;