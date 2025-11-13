import { useEffect, useState } from "react";

export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    gender: string;
    type: string;
    origin: string;
    location: string;
};

type ApiResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
};

export function useCharacters(page: number, search: string) {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState<number | null>(null);

    useEffect(() => {
        async function fetchCharacters() {
            try {
                setIsLoading(true);
                setError(null);

                const params = new URLSearchParams();
                params.set("page", String(page));
                if (search) {
                    params.set("name", search);
                }

                const response = await fetch(
                    `https://rickandmortyapi.com/api/character?${params.toString()}`
                );

                if (!response.ok) {
                    // 404 = no results for this search
                    if (response.status === 404) {
                        setCharacters([]);
                        setTotalPages(0);
                        setError("No characters found.");
                        return;
                    }
                    throw new Error("Failed to fetch characters");
                }

                const data: ApiResponse = await response.json();
                setCharacters(data.results);
                setTotalPages(data.info.pages);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCharacters();
    }, [page, search]);

    return { characters, isLoading, error, totalPages };
}
