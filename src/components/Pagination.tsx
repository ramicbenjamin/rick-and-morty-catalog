type PaginationProps = {
    page: number;
    totalPages: number | null;
    isLoading: boolean;
    onPageChange: (p: number) => void;
};

function Pagination({ page, totalPages, isLoading, onPageChange }: PaginationProps) {
    const isFirst = page === 1;
    const isLast = totalPages !== null && page >= totalPages;

    const btn =
        "px-4 py-2 rounded-lg border border-slate-600 bg-slate-800 text-slate-200 text-sm hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed";

    return (
        <div className="flex flex-col items-center mt-4 gap-2">
            <div className="flex gap-3">
                <button
                    className={btn}
                    disabled={isFirst || isLoading}
                    onClick={() => onPageChange(page - 1)}
                >
                    ← Previous
                </button>

                <button
                    className={btn}
                    disabled={isLast || isLoading}
                    onClick={() => onPageChange(page + 1)}
                >
                    Next →
                </button>
            </div>

            <div className="text-xs text-slate-400">
                Page <span className="text-slate-200">{page}</span>
                {totalPages && (
                    <>
                        {" "}
                        / <span className="text-slate-200">{totalPages}</span>
                    </>
                )}
            </div>
        </div>
    );
}

export default Pagination;
