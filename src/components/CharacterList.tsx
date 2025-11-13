import CharacterCard from "./CharacterCard";
import type {Character} from "../hooks/useCharacters.ts";


type CharacterListProps = {
    characters: Character[];
};

function CharacterList({ characters }: CharacterListProps) {
    if (characters.length === 0) {
        return (
            <p className="mt-8 text-center text-slate-400">
                No characters found.
            </p>
        );
    }

    return (
        <section className="mt-6 grid gap-6 md:grid-cols-2">
            {characters.map((char) => (
                <CharacterCard
                    key={char.id}
                    name={char.name}
                    species={char.species}
                    status={char.status}
                    gender={char.gender}
                    type={char.type}
                    origin={char.origin}
                    location={char.location}
                    image={char.image}
                />

            ))}
        </section>
    );
}

export default CharacterList;
