import { useStudent } from "../context/StdentContext";

const Dashboard = () => {
  const { students } = useStudent();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="p-6 bg-white rounded-2xl border">
        <p className="text-sm text-slate-500">Total Students</p>
        <p className="text-3xl font-bold">{students.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
