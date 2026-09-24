import { Edit3, Trash2 } from "lucide-react";
import { useStudent } from "../context/StdentContext";

const StudentTable = ({ students, onEdit }) => {
  const { theme, deleteStudent } = useStudent();
  return (
    <div
      className={`border rounded-2xl overflow-x-auto ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200 text-slate-800"}`}
    >
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr
            className={`border-b text-xs uppercase opacity-70 ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-500"}`}
          >
            <th className="p-4">Student</th>
            <th className="p-4">ID</th>
            <th className="p-4">Course & Batch</th>
            <th className="p-4">Contact</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody
          className={`divide-y ${theme === "dark" ? "divide-slate-700" : "divide-slate-200"}`}
        >
          {students.map((stu) => (
            <tr
              key={stu.id}
              className={`${theme === "dark" ? "hover:bg-slate-800/50" : "bg-slate-50"} transition-colors`}
            >
              <td className="p-4 flex items-center gap-3 font-semibold">
                <img
                  src={stu.image}
                  alt={stu.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p>{stu.name}</p>
                  <p className="text-xs font-normal opacity-70">
                    {stu.gender}, {stu.age} yrs
                  </p>
                </div>
              </td>
              <td className="p-4 font-mono text-xs text-indigo-500 font-bold">
                {stu.id}
              </td>
              <td className="p-4">
                <p className="font-semibold">{stu.course}</p>
                <p className="text-xs opacity-70">{stu.batch}</p>
              </td>
              <td className="p-4 text-xs">
                <p>{stu.email}</p>
                <p className="opacity-70">{stu.phone}</p>
              </td>
              <td className="p-4">
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-semibold ${stu.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}
                >
                  {stu.status}
                </span>
              </td>
              <td className="p-4 text-right">
                <div className="flex items-center justify-end gap-1">
                  <button
                    onClick={() => onEdit(stu)}
                    className={`p-1.5 text-indigo-600 rounded-lg cursor-pointer ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-indigo-50"} `}
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteStudent(stu.id)}
                    className={`p-1.5 text-rose-600 rounded-lg cursor-pointer ${theme === "dark" ? "hover:bg-slate-700" : "hover:bg-rose-50"}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
