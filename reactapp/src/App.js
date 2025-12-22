import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PatientList from "./components/PatientList";
import AddPatient from "./components/AddPatient";
import PatientDetails from "./components/PatientDetails";
import RoomStatus from "./components/RoomStatus";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/patient/:id" element={<PatientDetails />} />
        <Route path="/room/:id" element={<RoomStatus />} />
      </Routes>
    </>
  );
};

export default App;
