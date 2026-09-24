import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudent } from "../context/StdentContext";

const AddStudent = () => {
  const { addStudent, theme } = useStudent();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "React",
    batch: "2026-A",
    gender: "Male",
    age: 20,
    address: "",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    navigate("/students");
  };

  return (
    <div
      className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
        theme === "dark"
          ? "bg-[#1E293B] border-slate-700 text-white"
          : "bg-white border-slate-200 text-slate-800"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Enroll New Student</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
      >
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            required
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: Number(e.target.value) })
            }
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Course</label>
          <select
            value={formData.course}
            onChange={(e) =>
              setFormData({ ...formData, course: e.target.value })
            }
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          >
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Next.js">Next.js</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Batch</label>
          <select
            value={formData.batch}
            onChange={(e) =>
              setFormData({ ...formData, batch: e.target.value })
            }
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          >
            <option value="2026-A">2026-A</option>
            <option value="2026-B">2026-B</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            className={`w-full p-2.5 border rounded-xl  ${theme === "dark" && "bg-slate-800"}`}
          />
        </div>
        <button
          type="submit"
          className="sm:col-span-2 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors mt-2 cursor-pointer"
        >
          Add Student Record
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
