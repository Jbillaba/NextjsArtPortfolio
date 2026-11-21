'use client';

import * as React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/lib/definitions';
import { useGlobal } from '@/app/context/stateContext';
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import styles from '@/app/ui/artwork/cards.module.css';
import { Staatliches } from 'next/font/google';

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
    gap={7}
    percentage={true}
    ref={igRef}
    className="flex max-w-5xl"
  >
          {artworks?.map((artwork: Artwork) => (
                <div key={artwork.id} className={styles.card} >
                  <div className={`${styles.cardContent} rounded-sm `} >
                    <h1>{artwork.caption}</h1>
                  </div>
                    <Image
                    src={artwork.image}
                    alt={artwork.caption}
                    height={0}
                    width={300}
                    className="rounded-sm"
                    loading="eager"
                />
                  </div>
            ))}
      </MasonryInfiniteGrid >;
}