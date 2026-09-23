import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/students"
            element={<div className="p-8">Student Page Loading...</div>}
          />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
};

export default App;
