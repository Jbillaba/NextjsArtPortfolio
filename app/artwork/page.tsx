import { Suspense } from 'react';
import ArtCards from '@/app/ui/artwork/cards';
import { ArtworkSkeleton } from '@/app/ui/skeletons';
import { fetchFoodIllustrations, fetchSelectedIllustrations } from '@/app/lib/data';
// we keep this as a server component and fetch the data here and pass the data along into art cards
// however we need to ensure the client component can differentiate states
async function getArtworks() {
  const res = await fetchFoodIllustrations();
  return res
}

export default async function Page() {
  const data = getArtworks();
    return (
        <div>
            <Suspense fallback={<ArtworkSkeleton />}>
              <ArtCards data={ data }  />
            </Suspense>
        </div>
    );
}
