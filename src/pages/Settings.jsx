import { useState } from "react";
import { Sun, Moon, LogOut, Save, User, CheckCircle } from "lucide-react";
import { useStudent } from "../context/StdentContext";

const Settings = () => {
  const { theme, toggleTheme, profile, setProfile } = useStudent();

  const [formData, setFormData] = useState({
    name: profile.name || "",
    email: profile.email || "",
    role: profile.role || "",
    department: profile.department || "",
    image: profile.image || "",
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <div
      className={`max-w-2xl mx-auto p-6 md:p-8 rounded-2xl border space-y-6 ${
        theme === "dark"
          ? "bg-[#1E293B] border-slate-700 text-white"
          : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Preferences & Settings</h1>
        {savedSuccess && (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full">
            <CheckCircle className="w-4 h-4" /> Profile Updated!
          </span>
        )}
      </div>

      {/* Theme Settings */}
      <div
        className={`flex items-center justify-between pt-4 border-t  ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
      >
        <div>
          <h4 className="font-semibold text-sm">Application Theme</h4>
          <p className="text-xs opacity-70">
            Switch between light and dark visual modes.
          </p>
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs flex items-center gap-2 cursor-pointer transition-colors"
        >
          {theme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}{" "}
          Toggle Mode
        </button>
      </div>

      {/* Admin Profile Update Form */}
      <form
        onSubmit={handleSubmit}
        className={`space-y-4 pt-4 border-t text-sm  ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
      >
        <h4 className="font-semibold text-base flex items-center gap-2">
          <User className="w-4 h-4 text-indigo-500" /> Update Admin Profile
        </h4>

        <div className="flex items-center gap-4 py-2">
          <img
            src={
              formData.image ||
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
            }
            alt="Profile Preview"
            className="w-16 h-16 rounded-full object-cover border-2 border-indigo-600"
          />
          <div className="flex-1">
            <label className="block text-xs font-medium opacity-70 mb-1">
              Avatar Image URL
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className={`w-full p-2.5 border rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium opacity-70 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full p-2.5 border rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium opacity-70 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full p-2.5 border rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium opacity-70 mb-1">
              Role / Position
            </label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className={`w-full p-2.5 border rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium opacity-70 mb-1">
              Department
            </label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
              className={`w-full p-2.5 border rounded-xl ${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700"
                  : "bg-slate-50 border-slate-200"
              }`}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors mt-2"
        >
          <Save className="w-4 h-4" /> Save Profile Changes
        </button>
      </form>

      {/* Logout Button */}
      <div
        className={`pt-4 border-t  ${theme === "dark" ? "border-slate-700" : "border-slate-200"}`}
      >
        <button
          type="button"
          className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 text-sm cursor-pointer transition-colors"
        >
          <LogOut className="w-4 h-4" /> Logout Session
        </button>
      </div>
    </div>
  );
};

export default Settings;
