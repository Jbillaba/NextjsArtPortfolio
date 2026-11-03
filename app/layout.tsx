'use client';

import type { Metadata } from "next";
import "./globals.css";
import SideNav from '@/app/ui/SideNav/sidenav';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export default function RootLayout({ children }: { children: React.ReactNode;}) {


  return (
    <NuqsAdapter >
       <html lang="en">
        <body>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
        </div>
      </body>
    </html>
    </NuqsAdapter>

  );
}
