import { useState, useEffect } from "react";
import { searchBox } from "../../Services/HttpServices/SearchHttpServices";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ className }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const response = await searchBox(searchTerm);
    const filteredResults = response?.data?.data || [];
    setResults(filteredResults);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResults(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const handleClear = () => setQuery("");

  return (
      <div className={`relative ${className || ""} w-full max-w-md mx-auto`}>
        <div className="flex items-center border border-gray-300 bg-white rounded-full px-4 py-2 shadow-sm focus-within:ring-2 ring-yellow-100 transition">
          <FaSearch className="text-gray-400 mr-2" />
          <input
              type="text"
              className="flex-1 text-sm outline-none placeholder-gray-400"
              placeholder="Որոնել..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
              <button
                  className="ml-2 text-gray-400 hover:text-red-500 transition"
                  onClick={handleClear}
              >
                ×
              </button>
          )}
        </div>

        {results.length > 0 && (
            <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-2 shadow-lg z-50 max-h-60 overflow-y-auto">
              {results.map((item) => (
                  <li
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                  >
                    <Link to={`/single-product/${item.id}`} className="block w-full">
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}
