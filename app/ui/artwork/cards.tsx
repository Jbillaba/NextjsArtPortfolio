'use client';

import { use } from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/lib/definitions';
import { useGlobal } from '@/app/context/stateContext';

export default function ArtCards({ data }: { data: Promise<any[]> }) {
  const { state, setState } = useGlobal();

  const artworks = use(data);
  return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
          {artworks?.map((artwork: Artwork) => (
                <div key={artwork.id} className="grid gap-1">
                <div className="">
                </div>
                    <Image
                    src={artwork.image}
                    alt={artwork.caption}
                    height={600}
                    width={500}
                    className=""
                    loading="eager"
                />
                </div>
            ))}
        </div>

      )
}
