'use client';

import * as React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/lib/definitions';
import { useGlobal } from '@/app/context/stateContext';
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

export default function ArtCards({ foodData, selectedData }) {
  const { state, setState } = useGlobal();
  const igRef = React.useRef();

  let artworks = React.use(foodData);

  if (state != "Food Illustrations") {
    artworks = React.use(selectedData)
  }

  React.useEffect(() => {
    if (igRef.current) {
      igRef.current.updateItems();
    }
  }, [selectedData])

  return <MasonryInfiniteGrid
    className="container"
    gap={5}
    width={250}
    ref={igRef}
  >
          {artworks?.map((artwork: Artwork) => (
                <div key={artwork.id} className="grid gap-1">
                <div className="">
                </div>
                    <Image
                    src={artwork.image}
                    alt={artwork.caption}
                    height={0}
                    width={250}
                    className=""
                    loading="eager"
                />
                </div>
            ))}
      </MasonryInfiniteGrid >;
}
