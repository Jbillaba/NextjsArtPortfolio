'use client';

import { NavStateProvider } from "./stateContext";

export function Providers({ children }) {
    return (
        <NavStateProvider>
                {children}
        </NavStateProvider>
    )
}