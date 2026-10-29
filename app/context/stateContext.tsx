"use client";

import { createContext, useContext, useState } from 'react';

const renderContext = createContext<unknown | null>(null);

export function NavStateProvider({children}: {children: React.ReactNode}) {
    const [state, setState] = useState("Art Illustrations");

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
