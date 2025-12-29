
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PatientRegister from "./pages/PatientRegister";
import PatientList from "./pages/PatientList";
import Appointment from "./pages/Appointment";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import PatientReports from "./pages/PatientReports";
import RescheduleAppointment from "./pages/RescheduleAppointment";
import Quote from "./components/Quote"
 
const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<PatientRegister />} />
            <Route path="/patients" element={<PatientList />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/patient-dashboard" element={<PatientReports />} />
            <Route path="/reschedule" element={<RescheduleAppointment />} />
            <Route path="/reports" element={<PatientReports />} />
          </Routes>
          <Quote/>
        </Router>
    </AppProvider>
  );
};

export default App;
