type CharacterCardProps = {
    name: string;
    species: string;
    status: string;
    gender: string;
    type: string;
    origin:  string;
    location: string;
    image: string;
};

function CharacterCard({
                           name,
                           species,
                           status,
                           gender,
                           type,
                           origin,
                           location,
                           image,
                       }: CharacterCardProps) {
    // Status-based tinted card background
    const tint =
        status === "Alive"
            ? "bg-emerald-900/30 border-emerald-700/60"
            : status === "Dead"
                ? "bg-rose-900/30 border-rose-700/60"
                : "bg-slate-900/80 border-slate-700";

    return (
        <div
            className={`flex flex-col items-center ${tint} 
      border rounded-xl shadow-md p-6 md:flex-row md:max-w-xl transition`}
        >
            {/* Image */}
            <img
                className="object-cover w-full rounded-xl h-64 md:h-48 md:w-48 mb-4 md:mb-0"
                src={image}
                alt={name}
            />

            {/* Content */}
            <div className="flex flex-col justify-between md:p-4 leading-normal w-full">
                {/* Name */}
                <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-100">
                    {name}
                </h5>

                {/* Species + Gender */}
                <p className="text-sm text-slate-300 mb-2">
                    <span className="font-semibold text-slate-200">{species}</span>
                    {gender ? ` • ${gender}` : ""}
                    {type ? ` • ${type}` : ""}
                </p>

                {/* Status */}
                <span
                    className={`inline-block w-fit text-xs font-medium px-3 py-1 rounded-full mb-4
            ${
                        status === "Alive"
                            ? "bg-emerald-700/30 text-emerald-300 border border-emerald-500/40"
                            : status === "Dead"
                                ? "bg-rose-700/30 text-rose-300 border border-rose-500/40"
                                : "bg-slate-700/30 text-slate-300 border border-slate-600/40"
                    }
        `}
                >
          {status}
        </span>

                {/* Origin + Location */}
                <div className="space-y-1 text-sm text-slate-300">
                    <p>
                        <span className="font-semibold text-slate-200">Origin:</span>{" "}
                        {origin?.name ?? "Unknown"}
                    </p>
                    <p>
                        <span className="font-semibold text-slate-200">Last seen at:</span>{" "}
                        {location?.name ?? "Unknown"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
