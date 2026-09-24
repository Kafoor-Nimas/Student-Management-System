import { Mail, Phone, BookOpen, MapPin, Trash2, Edit3 } from "lucide-react";
import { useStudent } from "../context/StdentContext";

const StudentCard = ({ student, onEdit }) => {
  const { theme, deleteStudent } = useStudent();

  return (
    <div
      className={`p-5 rounded-2xl border flex flex-col justify-between transition-all hover:shadow-md ${
        theme === "dark"
          ? "bg-[#1E293B] border-slate-700 text-white"
          : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={student.image}
              alt={student.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
            />
            <div>
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">
                {student.id}
              </span>
              <h3 className="font-bold text-base leading-snug">
                {student.name}
              </h3>
              <p className="text-xs opacity-70">
                {student.gender}, {student.age} yrs
              </p>
            </div>
          </div>
          <span
            className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold ${
              student.status === "Active"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-rose-100 text-rose-800"
            }`}
          >
            {student.status}
          </span>
        </div>

        <div
          className={`space-y-2 text-xs opacity-80 pt-3 border-t ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
        >
          <p className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-indigo-500" />{" "}
            {student.course} ({student.batch})
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-indigo-500" /> {student.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-indigo-500" /> {student.phone}
          </p>
          <p className="flex items-center gap-2 truncate">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" /> {student.address}
          </p>
        </div>
      </div>

      <div
        className={`flex items-center justify-end gap-2 mt-5 pt-3 border-t ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
      >
        <button
          onClick={() => onEdit(student)}
          className={`p-2 text-indigo-600  rounded-lg transition-colors cursor-pointer ${theme === "dark" ? "hover:bg-slate-900" : "hover:bg-indigo-50"}`}
          title="Edit Student"
        >
          <Edit3 className="w-4 h-4" />
        </button>
        <button
          onClick={() => deleteStudent(student.id)}
          className={`p-2 text-rose-600  rounded-lg transition-colors cursor-pointer ${theme === "dark" ? "hover:bg-slate-900" : "hover:bg-rose-50"}`}
          title="Delete Student"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
