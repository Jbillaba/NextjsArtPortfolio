import Image from 'next/image';
import { fetchFoodIllustrations } from '@/app/lib/data';
import { Artwork } from '@/app/lib/definitions';

export default async function CardWrapper() {
    // this is a state variable which should be retrieved from elsewhere, or maybe not we'll figure it out how.
    const artworks = await fetchFoodIllustrations();
    {/*

        //the idea is as simple as this
        grab the state from navbar
        if render = Food artwork
            artworks = await fetchFood

        if render = Selected artwork
            artworks = await fetchSelected


        the issue comes from having to figure out how to access the state from sidenav within this one we only want to read the state not set anything

    */}

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >

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
