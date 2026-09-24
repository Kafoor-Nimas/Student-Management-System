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

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {search.filteredItems.map((s) => (
            <StudentCard key={s.id} student={s} onEdit={setEditingStudent} />
          ))}
        </div>
      ) : (
        <StudentTable
          students={search.filteredItems}
          onEdit={setEditingStudent}
        />
      )}

      {editingStudent && (
        <div className="fixed inset-0 bg-black-50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div
            className={`w-full max-w-md p-6 rounded-2xl ${theme === "dark" ? "bg-slate-800 text-white" : "bg-white text-slate-900"}`}
          >
            <h3 className="text-lg font-bold mb-4">Edit Student Profile</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateStudent(editingStudent.id, editingStudent);
                setEditingStudent(null);
              }}
              className="space-y-3 text-sm"
            >
              <input
                type="text"
                value={editingStudent.name}
                onChange={(e) =>
                  setEditingStudent({ ...editingStudent, name: e.target.value })
                }
                className={`w-full p-2 border rounded-lg ${theme === "dark" && "bg-slate-700"}`}
                placeholder="Name"
                required
              />
              <input
                type="email"
                value={editingStudent.email}
                onChange={(e) =>
                  setEditingStudent({
                    ...editingStudent,
                    email: e.target.value,
                  })
                }
                className={`w-full p-2 border rounded-lg ${theme === "dark" && "bg-slate-700"}`}
                placeholder="Email"
                required
              />
              <input
                type="text"
                value={editingStudent.phone}
                onChange={(e) =>
                  setEditingStudent({
                    ...editingStudent,
                    phone: e.target.value,
                  })
                }
                className={`w-full p-2 border rounded-lg ${theme === "dark" && "bg-slate-700"}`}
                placeholder="Phone"
                required
              />
              <select
                value={editingStudent.status}
                onChange={(e) =>
                  setEditingStudent({
                    ...editingStudent,
                    status: e.target.value,
                  })
                }
                className={`w-full p-2 border rounded-lg ${theme === "dark" && "bg-slate-700"}`}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingStudent(null)}
                  className={`px-4 py-2 rounded-lg cursor-pointer ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;
