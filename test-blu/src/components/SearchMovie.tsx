import { useState } from "react";

interface Props {
    onSearch: (query: string) => void;
    onCategorySelect: (category: string) => void;
}

const categories = [
  {
    name: "Now Playing",
    value: "now_playing",
  },
  {
    name: "Popular",
    value: "popular",
  },
  {
    name: "Upcoming",
    value: "upcoming",
  },
  {
    name: "Top Rated",
    value: "top_rated",
  },
];


const SearchMovie: React.FC<Props> = ({ onSearch, onCategorySelect }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(search);
    }

    console.log(search)

    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:item-center sm:justify-between mb-6">
            <form onSubmit={handleSearch} className="flex gap-2">
                <input 
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Movies"
                    className="border border-gray-300 rounded px-4 py-2 w-full sm:w-96"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Search
                </button>
            </form>
            <div>
                {categories.map((category) => (
                    <button
                        key={category.value}
                        onClick={() => onCategorySelect(category.value)}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default SearchMovie;