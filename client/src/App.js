import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardHR from "./views/HR/DashboardHR";
import EditEmployeeHR from "./views/HR/EditEmployeeHR";
import EditEmployeePR from "./views/PR/EditEmployeePR";
import DashboardPR from "./views/PR/DashboardPR";
import { ToastContainer } from "react-toastify";
import CreateEmployHR from "./views/HR/CreateEmployHR";
import CreateEmployPR from "./views/PR/CreateEmployPR";
import CreateEmployMa from "./views/Manager/CreateEmployee";
import Home from "./views/Home";
import Manager from "./views/Manager";
function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={1000} type="default" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/hr" element={<DashboardHR />} />
        </Routes>
        <Routes>
          <Route path="/pr" element={<DashboardPR />} />
        </Routes>
        <Routes>
          <Route
            path="/edit-employee/HR/:employeeId"
            element={<EditEmployeeHR />}
          />
        </Routes>
        <Routes>
          <Route
            path="/edit-employee/PR/:employeeId"
            element={<EditEmployeePR />}
          />
        </Routes>
        <Routes>
          <Route path="/create-employee-hr" element={<CreateEmployHR />} />
        </Routes>
        <Routes>
          <Route path="/create-employee-pr" element={<CreateEmployPR />} />
        </Routes>
        <Routes>
          <Route path="/create-employee-manager" element={<CreateEmployMa />} />
        </Routes>
        <Routes>
          <Route path="/manager" element={<Manager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
