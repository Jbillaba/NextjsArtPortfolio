'use client';

import * as React from 'react';
import Image from 'next/image';
import { Artwork } from '@/app/lib/definitions';
import { useGlobal } from '@/app/context/stateContext';
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import styles from '@/app/ui/artwork/cards.module.css';
import lightboxStyles from '@/app/ui/artwork/lightbox.module.css';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';

export default function ArtCards({ foodData, selectedData }) {
  const { state, setState } = useGlobal();
  const [show, toggleShow] = React.useState(false);
  const [index, setIndex] = React.useState(-1);

  const igRef = React.useRef();

  let artworks: Artwork[] = React.use(foodData);

  if (state != "Food Illustrations") {
    artworks = React.use(selectedData)
  }

  React.useEffect(() => {
    if (igRef.current) {
      igRef.current.updateItems();
    }
  }, [selectedData])

  return ( 
  <>
    <Lightbox
      plugins={[Captions]}
      controller={{closeOnBackdropClick: true}}
      captions={{descriptionTextAlign: 'end'}}
      slides={artworks}
      index={index}
      open={index >= 0}
      close={() => setIndex(-1)}
      className={lightboxStyles.lightbox}
    />
    
    <MasonryInfiniteGrid
      column={3}
      gap={7}
      percentage={true}
      ref={igRef}
      align='center'
    >
      {artworks?.map((artwork: Artwork) => (
            <div key={artwork.id} className={styles.card}>
              <div className={`${styles.cardContent} rounded-sm `} onClick={() => setIndex(Number(artwork.id))} >
                <h1>{artwork.title}</h1>
              </div>
                <Image
                src={artwork.src}
                alt={artwork.title}
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