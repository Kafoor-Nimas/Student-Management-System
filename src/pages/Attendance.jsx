import AttendanceCard from "../components/AttendanceCard";
import { useStudent } from "../context/StdentContext";

const Attendance = () => {
  const { students, theme } = useStudent();

  return (
    <div className="space-y-6">
      <h1
        className={`font-bold text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}
      >
        Attendance Logger
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {students.map((s) => (
          <AttendanceCard key={s.id} student={s} />
        ))}
      </div>
    </div>
  );
};

export default Attendance;
