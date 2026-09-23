import { useStudent } from "../context/StdentContext";
import { Users, UserCheck, UserX, BookOpen } from "lucide-react";

const Dashboard = () => {
  const { students, theme } = useStudent();

  const total = students.length;
  const active = students.filter((s) => s.status === "Active").length;
  const inactive = students.filter((s) => s.status === "Inactive").length;
  const reactCount = students.filter((s) => s.course === "React").length;
  const jsCount = students.filter((s) => s.course === "JavaScript").length;
  const nextCount = students.filter((s) => s.course === "Next.js").length;

  return (
    <div className="space-y-8">
      <h1
        className={`font-bold text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}
      >
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className={`p-5 rounded-2xl border flex items-center justify-between ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200"}`}
        >
          <div>
            <p className="text-xs font-semibold opacity-75">Total Students</p>
            <p className="text-2xl font-bold mt-1">{total}</p>
          </div>
          <Users className="w-8 h-8 text-indigo-600" />
        </div>
        <div
          className={`p-5 rounded-2xl border flex items-center justify-between ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200"}`}
        >
          <div>
            <p className="text-xs font-semibold opacity-75">Active Students</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{active}</p>
          </div>
          <UserCheck className="w-8 h-8 text-emerald-600" />
        </div>

        <div
          className={`p-5 rounded-2xl border flex items-center justify-between ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200"}`}
        >
          <div>
            <p className="text-xs font-semibold opacity-75">
              Inactive Students
            </p>
            <p className="text-2xl font-bold text-rose-600 mt-1">{inactive}</p>
          </div>
          <UserX className="w-8 h-8 text-rose-600" />
        </div>

        <div
          className={`p-5 rounded-2xl border flex items-center justify-between ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200"}`}
        >
          <div>
            <p className="text-xs font-semibold opacity-75">React Students</p>
            <p className="text-2xl font-bold text-sky-600 mt-1">{reactCount}</p>
          </div>
          <BookOpen className="w-8 h-8 text-sky-600" />
        </div>
        <div
          className={`p-5 rounded-2xl border flex items-center justify-between ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200"}`}
        >
          <div>
            <p className="text-xs font-semibold opacity-75">JS Students</p>
            <p className="text-2xl font-bold text-amber-500 mt-1">{jsCount}</p>
          </div>
          <BookOpen className="w-8 h-8 text-amber-500" />
        </div>

        <div
          className={`p-5 rounded-2xl border flex items-center justify-between ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200"}`}
        >
          <div>
            <p className="text-xs font-semibold opacity-75">Next.js Students</p>
            <p className="text-2xl font-bold text-purple-600 mt-1">
              {nextCount}
            </p>
          </div>
          <BookOpen className="w-8 h-8 text-purple-600" />
        </div>
      </div>

      <div className="space-y-4">
        <h2
          className={`font-bold text-lg ${theme === "dark" ? "text-white" : "text-slate-900"}`}
        >
          Recently Enrolled
        </h2>
        <div
          className={`border rounded-2xl overflow-hidden ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200 text-slate-800"}`}
        >
          <div
            className={`divide-y ${theme === "dark" ? "divide-slate-700" : "divide-slate-200"}`}
          >
            {students.slice(0, 5).map((stu) => (
              <div
                key={stu.id}
                className="p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={stu.image}
                    alt={stu.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">{stu.name}</h4>
                    <p className="text-xs opacity-75">
                      {stu.course} • {stu.batch}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${stu.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}
                >
                  {stu.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
