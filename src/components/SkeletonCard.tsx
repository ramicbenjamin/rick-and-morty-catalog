function SkeletonCard() {
    return (
        <div className="flex flex-col items-center bg-slate-900/80 border border-slate-800 rounded-xl shadow-md p-6 md:flex-row md:max-w-xl animate-pulse">
            <div className="w-full rounded-xl h-64 md:h-48 md:w-48 bg-slate-700 mb-4 md:mb-0"></div>

            <div className="flex flex-col justify-between md:p-4 w-full">
                <div className="h-6 w-3/4 bg-slate-700 rounded mb-4"></div>
                <div className="h-4 w-1/2 bg-slate-700 rounded mb-6"></div>
                <div className="h-10 w-32 bg-slate-700 rounded"></div>
            </div>
        </div>
    );
}

export default SkeletonCard;
