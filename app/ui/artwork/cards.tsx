import Image from 'next/image';
import { fetchFoodIllustrations } from '@/app/lib/data';
import { Artwork } from '@/app/lib/definitions';
import { useGlobal } from '@/app/context/stateContext';

export default async function CardWrapper() {
    const artworks = await fetchFoodIllustrations();

 // for now lets see if we can access the state in this code.
  return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >

            <div>
                <p> current state is {} </p>
            </div>

                {artworks?.map((artwork: Artwork) => (
                <div key={artwork.id} className="grid gap-1"> {/* this encapsulates a card, use this for the background */}
                <div className=""> {/* this is for the space between the image and background bordering, i think im explaining that right */}
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
