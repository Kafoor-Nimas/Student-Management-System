import { Link } from "react-router-dom";
import { useStudent } from "../context/StdentContext";
import { GraduationCap, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme, profile } = useStudent();
  return (
    <header
      className={`sticky top-0 z-40 border-b px-6 py-3.5 transition-colors ${theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200 text-slate-800"}`}
    >
      <div className="max-w-[1700px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2.5">
          <GraduationCap
            className={`w-7 h-7 ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"} `}
          />
          <span className="font-bold text-lg tracking-tight">
            EduManager{" "}
            <span
              className={`text-xs font-semibold uppercase ${theme === "dark" ? "text-indigo-400" : "text-indigo-600"}`}
            >
              SMS
            </span>
          </span>
        </Link>

        {/* Theme Switch */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${theme === "dark" ? "bg-slate-800 border-slate-700 text-amber-400" : "bg-slate-100 border-slate-200 text-slate-600"}`}
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

          {/* Admin info */}
          <Link
            to={"/profile"}
            className="flex iems-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold leading-tight">
                {profile.name}
              </p>
              <p className="text-xs opacity-75">{profile.role}</p>
            </div>
            <img
              src={profile.image}
              alt={profile.name}
              className="w-9 h-9 rounded-full object-cover border-2 border-indigo-600"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
