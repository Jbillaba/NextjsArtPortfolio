'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useQueryState } from 'nuqs';
import { usePathname } from 'next/navigation';
import { link } from 'fs';

const links = [
    { name: 'Hello', href: '/hello', icon: null },
    { name: 'Food Illustrations', href: '/artwork', icon: null, state: 'Food', },
    { name: 'Selected Artworks', href:'/artwork', icon: null, state: 'Selected', },
    { name: 'Design', href: '/design', icon: null },
    { name: 'Shop', href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', icon: null }
]

export default function NavLinks() {
  const [rendering, setRendering] = useState('Food Illustrations');
  const [viewing, setViewing] = useQueryState('viewing')
  const URL = usePathname()

  function handleState(link) {
    setRendering(link.name)
    handleQueryState()
  }

  function handleQueryState() {
    if (URL == "/artwork" && rendering == 'Selected Artworks' ) setViewing('selected')
  }

  return (
    <>
    <div className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3')} >
      <p> current state is {rendering}</p>
    </div>
      {links.map((link) => {
        return (
          <Link
            onClick={ () => handleState(link)}
            key={link.name}
            href={link.href}
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': rendering === link.name
              })}
          >
            <p className='block' >{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
