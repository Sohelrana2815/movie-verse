export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-8 relative">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400 text-lg">
        🔍
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-3.5 pl-12 pr-4 text-sm font-medium text-white placeholder-slate-400 bg-[#1E293B] border border-slate-700/80 rounded-xl shadow-lg transition-all duration-200 outline-none focus:border-[#E11D48] focus:ring-2 focus:ring-[#E11D48]/30 hover:border-slate-600"
      />
    </div>
  );
}