import { Suspense } from 'react';
import ArtCards from '@/app/ui/artwork/cards';
import { ArtworkSkeleton } from '@/app/ui/skeletons';
import { fetchFoodIllustrations, fetchSelectedIllustrations } from '@/app/lib/data';

async function getFoodArtworks() {
  const res = await fetchFoodIllustrations();
  return res
}

async function getSelectedArtworks() {
  const res = await fetchSelectedIllustrations();
  return res
}

export default async function Page() {

  const [foodArt, SelectedArt] = [
    getFoodArtworks(),
    getSelectedArtworks(),
  ]

    return (
        <div>
            <Suspense fallback={<ArtworkSkeleton />}>
              <ArtCards foodData={ foodArt } selectedData={SelectedArt}  />
            </Suspense>
        </div>
    );
}
