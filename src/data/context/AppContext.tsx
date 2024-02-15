'use client';

import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    theme?: string;
    toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {

    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme);
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if(theme) setTheme(theme);
    }, [])

    return (
        <AppContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;