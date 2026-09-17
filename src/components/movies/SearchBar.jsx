export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8 relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
        🔍
      </div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-4 pl-12 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </div>
  );
}
