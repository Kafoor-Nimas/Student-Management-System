import { useStudent } from "../context/StdentContext";

const Profile = () => {
  const { profile, theme } = useStudent();

  return (
    <div className={`max-w-xl mx-auto p-6 rounded-2xl border text-center space-y-4 ${
      theme === "dark" ? "bg-[#1E293B] border-slate-700 text-white" : "bg-white border-slate-200 text-slate-800"
    }`}>
      <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-indigo-600" />
      <div>
        <h2 className="text-xl font-bold">{profile.name}</h2>
        <p className="text-sm text-indigo-600 font-semibold">{profile.role}</p>
        <p className="text-xs opacity-70 mt-1">{profile.department} • {profile.email}</p>
      </div>
    </div>
  );
};

export default Profile;