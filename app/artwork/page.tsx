import { Suspense } from 'react';
import ArtCards from '@/app/ui/artwork/cards';
import { ArtworkSkeleton } from '@/app/ui/skeletons';
import { fetchFoodIllustrations } from '@/app/lib/data';


export default async function Page() {
    return (
        <div>
            <Suspense fallback={<ArtworkSkeleton />}>
                <ArtCards />
            </Suspense>
        </div>
    );
}