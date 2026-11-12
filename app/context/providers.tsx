'use client';

import { NavStateProvider } from "./stateContext";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export function Providers({ children }) {
    return (
        <NavStateProvider>
            <NuqsAdapter>
                {children}
            </NuqsAdapter>
        </NavStateProvider>
    )
}