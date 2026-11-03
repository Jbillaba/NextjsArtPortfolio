import Link from 'next/link';
import SabineLogo from '@/app/ui/sabineLogo';
import NavLinks from './nav-links';
import { Suspense } from 'react';

export default function SideNav() {
    return(
     <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
            className="mb-2 flex h-20 items-end justify-center rounded-md bg-blue-500 p-4 md:h-40"
            href="/"
        >
            <div className="w-32 text-white md:w-40">
                <SabineLogo />
            </div>
        </Link>
        <div className="flex grow flex-grow justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <Suspense>
            <NavLinks />
          </Suspense>
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"
            >
            </div>
        </div>
     </div>
    );
}
