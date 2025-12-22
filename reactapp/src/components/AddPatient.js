import React, { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const { addPatient } = useContext(PatientContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    addPatient({
      id: Date.now(),
      name,
      age,
      roomStatus: "Available",
    });
    navigate("/");
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <input placeholder="Patient Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default AddPatient;
