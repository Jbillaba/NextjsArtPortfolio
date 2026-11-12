"use client";

import { createContext, useContext, useState } from 'react';

interface GlobalContextType {
    state: string;
    setState: (state: string) => void;
}


const renderContext = createContext<GlobalContextType | null>(null);

export function NavStateProvider({children}: {children: React.ReactNode}) {
    const [state, setState] = useState("Food Illustrations");

    return (
      <renderContext.Provider value={{ state, setState }} >
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
