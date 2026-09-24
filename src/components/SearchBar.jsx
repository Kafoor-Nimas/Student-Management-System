import { Search } from "lucide-react";
import { useStudent } from "../context/StdentContext";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  courseFilter,
  setCourseFilter,
  statusFilter,
  setStatusFilter,
  batchFilter,
  setBatchFilter,
}) => {
  const { theme } = useStudent();

  const selectStyle = `w-full sm:w-auto px-3.5 py-2.5 rounded-xl text-sm border cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
    theme === "dark"
      ? "bg-slate-800 border-slate-700 text-white"
      : "bg-slate-50 border-slate-200 text-slate-800"
  }`;

  return (
    <div
      className={`p-4 rounded-2xl border mb-6 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between ${
        theme === "dark" ? "bg-[#1E293B] border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      {/* Search Input - Full width on Mobile, fixed width on Large screens */}
      <div className="relative w-full lg:w-80">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
            theme === "dark"
              ? "bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
          }`}
        />
      </div>

      {/* Filter Dropdowns - Grid on Mobile/Tablet (3 uniform columns), Flex on Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className={selectStyle}
        >
          <option value="All">All Courses</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Next.js">Next.js</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={selectStyle}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          value={batchFilter}
          onChange={(e) => setBatchFilter(e.target.value)}
          className={selectStyle}
        >
          <option value="All">All Batches</option>
          <option value="2026-A">2026-A</option>
          <option value="2026-B">2026-B</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;