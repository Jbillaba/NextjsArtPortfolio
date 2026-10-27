//Loading animation 
const shimmer = 
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div className="flex p-4">
            </div>
            <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-64">
            </div>
        </div>
    );
}

export function CardsSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    );
}


export function ArtworkSkeleton () {
    return (
        <>
            <div className={`${shimmer} `} />
            <div className="grid gap-6 sm:grid-cols-2 lg-grid-cols-4">
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
            </div>
        </>
    );
}