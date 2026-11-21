'use client';

import * as React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/lib/definitions';
import { useGlobal } from '@/app/context/stateContext';
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import styles from '@/app/ui/artwork/cards.module.css';
import Lightbox from 'yet-another-react-lightbox';

export default function ArtCards({ foodData, selectedData }) {
  const { state, setState } = useGlobal();
  const [show, toggleShow] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

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

  // figure out how to get the artwork array working with the lightbox data please 


  return ( 
  <>
    <Lightbox
      slides={artworks}
      index={index}
      open={index >= 0}
      close={() => setIndex(-1)}
    />
    
    <MasonryInfiniteGrid
      gap={7}
      percentage={true}
      ref={igRef}
      className="flex max-w-5xl"
    >
            {artworks?.map((artwork: Artwork) => (
                  <div key={artwork.id} className={styles.card}>
                    <div className={`${styles.cardContent} rounded-sm `} onClick={() => setIndex(Number(artwork.id))} >
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
  </>
  );
};