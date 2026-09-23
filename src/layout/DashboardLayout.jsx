import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useStudent } from "../context/StdentContext";

const DashboardLayout = ({ children }) => {
  const { theme } = useStudent();
  return (
    <div
      className={`min-h-screen transition-colors ${theme === "dark" ? "bg-[#0F172A]" : "bg-slate-50"}`}
    >
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-[1500px] mx-auto">
        <Sidebar />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
