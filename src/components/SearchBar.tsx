import React from "react";

type SearchBarProps = {
    value: string;
    onChange: (newValue: string) => void;
    onSubmit: () => void;
};

function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form
            onSubmit={submit}
            className="flex flex-col items-center gap-3 bg-slate-900/80 border border-slate-800 rounded-xl shadow px-4 py-4 mb-6 md:flex-row md:justify-center"
        >
            <div className="w-full max-w-md relative">
                <input
                    type="text"
                    value={value}
                    placeholder="Search characters..."
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-950/90 text-slate-200 py-2 px-3 text-sm focus:ring-2 focus:ring-slate-600 focus:outline-none"
                />
            </div>

            <button
                type="submit"
                className="inline-flex items-center bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg text-sm text-slate-100 hover:bg-slate-700 focus:ring-2 focus:outline-none focus:ring-slate-600"
            >
                Search
            </button>
        </form>
    );
}

export default SearchBar;
