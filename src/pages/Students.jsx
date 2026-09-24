import { useState } from "react";
import SearchBar from "../components/SearchBar";
import StudentCard from "../components/StudentCard";
import StudentTable from "../components/StudentTable";
import { useStudent } from "../context/StdentContext";
import { useSearch } from "../hooks/useSearch";
import { LayoutGrid, List } from "lucide-react";

const Students = () => {
  const { students, theme, updateStudent } = useStudent();
  const [viewMode, setViewMode] = useState("grid");
  const [editingStudent, setEditingStudent] = useState(null);

  const search = useSearch(students);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1
          className={`font-bold text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}
        >
          All Students Directory
        </h1>
        <div
          className={`flex items-center gap-1 p-1 rounded-xl ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"}`}
        >
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg cursor-pointer ${viewMode === "grid" ? `${theme === "dark" ? "bg-slate-700" : "bg-white"} shadow-xs` : "opacity-60"}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`p-2 rounded-lg cursor-pointer ${viewMode === "table" ? `${theme === "dark" ? "bg-slate-700" : "bg-white"} shadow-xs` : "opacity-60"}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      <SearchBar {...search} />
    </div>
  );
};

export default Students;
