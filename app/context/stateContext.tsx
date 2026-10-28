"use client";

import { createContext, useContext, useState } from 'react';

const renderContext = createContext<any | null>(null);

export function GlobalProvider({children}: {children: React.ReactNode}) {
    const [state, setState] = useState("Hello");

    return (
        <renderContext.Provider value={state, setState} >
            {children}
        </renderContext.Provider>
    )
}

export function useGlobal() {
    const context = useContext(renderContext);
    if (!context) {
        throw new Error('useGlobal must be used within a global Provider');
    }
    return context;
}
