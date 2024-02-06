'use client';

import { createContext, useState } from "react";

interface AppContextProps {
    theme?: string;
    toggleTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {

    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <AppContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;