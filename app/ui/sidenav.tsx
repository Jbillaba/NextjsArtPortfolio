'use client';
import Link from 'next/link';
import SabineLogo from '@/app/ui/sabineLogo';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState, useContext, createContext } from 'react';
import { useGlobal } from '@/app/context/stateContext';

const links = [
    { name: 'Hello', href: '/hello', icon: null },
    { name: 'Food Illustrations', href: '/artwork', icon: null},
    { name: 'Selected Artworks', href:'/artwork', icon: null},
    { name: 'Design', href: '/design', icon: null },
    { name: 'Shop', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: null }
]

export default function SideNav() {
  const [rendering, setRendering] = useState('Food Illustrations');
  const { state, setState } = useGlobal();

  const pathname = usePathname();

  console.log(state)

    function handleRendering(link: any) {
      setRendering(link);
      setState(link);
    }

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

            {links.map((link) => {
                return (

                    <Link
                        onClick={() => handleRendering(link.name)}
                        key={link.name}
                        href={link.href}
                        className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                'bg-sky-100 text-blue-600': rendering === link.name,
                            },
                        )}
                    >
                        <p className="block" >{link.name}</p>
                    </Link>
                );
            })}

            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"
            >
            </div>
        </div>
     </div>
    );
}
