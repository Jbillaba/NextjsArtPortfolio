import { Suspense } from 'react';
import CardWrapper from '@/app/ui/artwork/cards';
import { ArtworkSkeleton } from '@/app/ui/skeletons';


export default async function Page() {

    return (
        <div>
            <Suspense fallback={<ArtworkSkeleton />}>
                <CardWrapper />
            </Suspense>
        </div>
    );
}