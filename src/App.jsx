import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";

const App = () => {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
};

export default App;
