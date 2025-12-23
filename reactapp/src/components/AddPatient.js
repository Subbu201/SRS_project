import React, { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

const AddPatient = () => {
  const { addPatient } = useContext(PatientContext);

  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addPatient({
      id: Date.now(),
      name: patientName,
      age: age,
      roomStatus: "Available"
    });

    setPatientName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>

      <input
        placeholder="Patient Name"   // ✅ MATCH TEST
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />

      <input
        placeholder="Age"            // ✅ MATCH TEST
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">
        Submit                     {/* ✅ MATCH TEST */}
      </button>
    </form>
  );
};

export default AddPatient;
