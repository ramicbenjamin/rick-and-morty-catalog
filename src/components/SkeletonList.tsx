import SkeletonCard from "./SkeletonCard";

type SkeletonListProps = {
    count?: number;
};

function SkeletonList({ count = 6 }: SkeletonListProps) {
    return (
        <section className="mt-6 grid gap-6 md:grid-cols-2">
            {Array.from({ length: count }).map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </section>
    );
}

export default SkeletonList;
