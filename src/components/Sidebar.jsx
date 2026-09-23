import {
  LayoutDashboard,
  Users,
  UserPlus,
  CalendarCheck,
  BarChart3,
  User,
  Settings,
} from "lucide-react";
import { useStudent } from "../context/StdentContext";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const { theme } = useStudent();

  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <Users className="w-4 h-4" />,
    },
    {
      name: "Add Student",
      path: "/add-student",
      icon: <UserPlus className="w-4 h-4" />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <CalendarCheck className="w-4 h-4" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    { name: "Profile", path: "/profile", icon: <User className="w-4 h-4" /> },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];
  return (
    <aside
      className={`w-full md:w-64 p-5 border-r min-h-[calc(100vh-65px)] transition-colors ${theme === "dark" ? "bg-[#0F172A] border-slate-700 text-slate-300" : "bg-white border-slate-200 text-slate-600"}`}
    >
      <nav className="space-y-1.5 font-medium text-sm">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${isActive ? "bg-indigo-600 text-white font-semibold shadow-xs" : theme === "dark" ? "hover:bg-slate-800 hover:text-white" : "hover:bg-slate-100 hover:text-slate-900"}`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
