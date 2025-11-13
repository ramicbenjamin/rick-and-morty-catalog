import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import CharacterList from "./components/CharacterList";
import { useCharacters } from "./hooks/useCharacters";
import SkeletonList from "./components/SkeletonList.tsx";

function App() {
    const [page, setPage] = useState(1);

    // What user is currently typing
    const [searchInput, setSearchInput] = useState("");

    // What we actually use to hit the API (debounced)
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // Custom hook handles fetching logic
    const { characters, isLoading, error, totalPages } = useCharacters(
        page,
        debouncedSearch
    );

    // Debounce: wait 500ms after user stops typing
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedSearch(searchInput);
            setPage(1); // reset to first page for a new search
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchInput]);


    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 flex items-start justify-center py-10">
            <div className="w-full max-w-5xl px-4">
                <h1 className="text-3xl font-bold text-center mb-2">Rick and Morty Browser</h1>
                <p className="text-center text-slate-400 mb-6 text-sm">
                    Search characters, explore pages, and browse the multiverse.
                </p>

                <SearchBar
                    value={searchInput}
                    onChange={setSearchInput}
                    onSubmit={() => {
                        // Immediate search when pressing Enter or clicking Search
                        setDebouncedSearch(searchInput);
                        setPage(1);
                    }}
                />

                {isLoading && <p>Loading characters...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    isLoading={isLoading}
                    onPageChange={setPage}
                />

                {isLoading ? (
                    <SkeletonList />
                ) : (
                    <CharacterList characters={characters} />
                )}
            </div>
        </div>
    );

}

export default App;
