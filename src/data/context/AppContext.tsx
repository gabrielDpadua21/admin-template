'use client';

import { createContext } from "react";

const AppContext = createContext({
    name: 'Text Context Api'
});

export function AppProvider(props: any) {
    return (
        <AppContext.Provider value={{name: 'Text Context Api'}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;

export const AppConsumer = AppContext.Consumer;