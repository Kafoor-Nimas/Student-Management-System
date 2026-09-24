import { Users, CalendarCheck, BookOpen, UserCheck, UserX } from "lucide-react";
import { useStudent } from "../context/StdentContext";

const Reports = () => {
  const { students, theme } = useStudent();

  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.status === "Active").length;
  const inactiveStudents = students.filter(
    (s) => s.status === "Inactive",
  ).length;

  // 1. Attendance Calculations
  const totalPresent = students.reduce(
    (acc, s) => acc + (s.attendance?.present || 0),
    0,
  );
  const totalAbsent = students.reduce(
    (acc, s) => acc + (s.attendance?.absent || 0),
    0,
  );
  const totalRecordedSessions = totalPresent + totalAbsent;
  const overallAttendanceRate =
    totalRecordedSessions > 0
      ? Math.round((totalPresent / totalRecordedSessions) * 100)
      : 0;

  // 2. Course Breakdown Calculations
  const courseCounts = students.reduce((acc, s) => {
    acc[s.course] = (acc[s.course] || 0) + 1;
    return acc;
  }, {});

  const cardStyle = `p-6 rounded-2xl border space-y-4 ${
    theme === "dark"
      ? "bg-[#1E293B] border-slate-700 text-white"
      : "bg-white border-slate-200 text-slate-800"
  }`;

  return (
    <div className="space-y-6">
      <h1
        className={`font-bold text-2xl ${theme === "dark" ? "text-white" : "text-slate-900"}`}
      >
        System Reports & Analytics
      </h1>

      {/* SECTION 1: STUDENT COUNT SUMMARY */}
      <div className={cardStyle}>
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-500" /> Student Enrollment
          Summary
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div
            className={`p-4 rounded-xl border ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"}`}
          >
            <p className="text-xs opacity-70 font-medium">Total Registered</p>
            <p
              className={`text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1 ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
            >
              {totalStudents}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"}`}
          >
            <p className="text-xs opacity-70 font-medium flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-emerald-500" /> Active
              Students
            </p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">
              {activeStudents}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"}`}
          >
            <p className="text-xs opacity-70 font-medium flex items-center gap-1">
              <UserX className="w-3.5 h-3.5 text-rose-500" /> Inactive Students
            </p>
            <p className="text-2xl font-bold text-rose-600 mt-1">
              {inactiveStudents}
            </p>
          </div>
        </div>

        {/* Active Rate Progress Bar */}
        <div className="pt-2">
          <div className="flex justify-between text-xs font-medium mb-1">
            <span>Active Student Ratio</span>
            <span>
              {totalStudents > 0
                ? Math.round((activeStudents / totalStudents) * 100)
                : 0}
              %
            </span>
          </div>
          <div
            className={`w-full  h-3 rounded-full overflow-hidden ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
          >
            <div
              className="bg-emerald-500 h-full transition-all duration-500"
              style={{
                width: `${totalStudents > 0 ? (activeStudents / totalStudents) * 100 : 0}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* SECTION 2: ATTENDANCE SUMMARY */}
      <div className={cardStyle}>
        <h3 className="font-bold text-lg flex items-center gap-2">
          <CalendarCheck className="w-5 h-5 text-indigo-500" /> Attendance
          Analytics
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div
            className={`p-4 rounded-xl border  ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"}`}
          >
            <p className="text-xs opacity-70 font-medium">
              Total Session Marks
            </p>
            <p className="text-2xl font-bold mt-1">{totalRecordedSessions}</p>
          </div>

          <div
            className={`p-4 rounded-xl border  ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"}`}
          >
            <p className="text-xs opacity-70 font-medium text-emerald-600">
              Total Present Marks
            </p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">
              {totalPresent}
            </p>
          </div>

          <div
            className={`p-4 rounded-xl border  ${theme === "dark" ? "border-slate-700 bg-slate-800/50" : "border-slate-200 bg-slate-50"}`}
          >
            <p className="text-xs opacity-70 font-medium text-rose-600">
              Total Absent Marks
            </p>
            <p className="text-2xl font-bold text-rose-600 mt-1">
              {totalAbsent}
            </p>
          </div>
        </div>

        {/* Overall Attendance Rate Bar */}
        <div className="pt-2">
          <div className="flex justify-between text-xs font-medium mb-1">
            <span>Average Attendance Rate</span>
            <span>{overallAttendanceRate}%</span>
          </div>
          <div
            className={`w-full h-3 rounded-full overflow-hidden ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
          >
            <div
              className="bg-indigo-600 h-full transition-all duration-500"
              style={{ width: `${overallAttendanceRate}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* SECTION 3: COURSE SUMMARY */}
      <div className={cardStyle}>
        <h3 className="font-bold text-lg flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-500" /> Course Distribution
          Breakdown
        </h3>

        <div className="space-y-3 pt-2">
          {Object.keys(courseCounts).length > 0 ? (
            Object.entries(courseCounts).map(([courseName, count]) => {
              const percentage = Math.round((count / totalStudents) * 100);
              return (
                <div key={courseName} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="font-semibold">{courseName}</span>
                    <span className="opacity-75">
                      {count} Students ({percentage}%)
                    </span>
                  </div>

                  <div
                    className={`w-full h-2.5 rounded-full overflow-hidden ${theme === "dark" ? "bg-slate-700" : "bg-slate-200"}`}
                  >
                    <div
                      className="bg-indigo-500 h-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-xs opacity-70">No course data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reports;
