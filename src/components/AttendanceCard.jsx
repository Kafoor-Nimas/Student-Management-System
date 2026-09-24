import { CheckCircle2, XCircle } from "lucide-react";
import { useStudent } from "../context/StdentContext";

const AttendanceCard = ({ student }) => {
  const { theme, markAttendance } = useStudent();

  const total = student.attendance.total || 1;
  const percentage =
    Math.round((student.attendance.present / total) * 100) || 0;
  return (
    <div
      className={`p-5 rounded-2xl border flex items-center justify-between gap-4 ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200 text-slate-800"}`}
    >
      <div className="flex items-center gap-3">
        <img
          src={student.image}
          alt={student.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-base">{student.name}</h4>
          <p className="text-xs opacity-75">
            {student.course} • {student.id}
          </p>
          <div className="flex items-center gap-3 mt-1 text-xs">
            <span className="text-emerald-600 font-semibold">
              P: {student.attendance.present}
            </span>
            <span className="text-rose-600 font-semibold">
              A: {student.attendance.absent}
            </span>
            <span className="font-bold text-indigo-600">({percentage}%)</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => markAttendance(student.id, "present")}
          className="p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
        >
          <CheckCircle2 className="w-4 h-4" /> Present
        </button>
        <button
          onClick={() => markAttendance(student.id, "absent")}
          className="p-2 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-xl transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
        >
          <XCircle className="w-4 h-4" /> Absent
        </button>
      </div>
    </div>
  );
};

export default AttendanceCard;
