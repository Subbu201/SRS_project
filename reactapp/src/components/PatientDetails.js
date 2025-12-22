import React, { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { useParams, Link } from "react-router-dom";

const PatientDetails = () => {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find((p) => p.id.toString() === id);

  if (!patient) return <p>Patient not found</p>;

  return (
    <div>
      <h2>{patient.name}</h2>
      <p>Age: {patient.age}</p>
      <p>Room Status: {patient.roomStatus}</p>
      <Link to={`/room/${patient.id}`}>Update Room Status</Link>
    </div>
  );
};

export default PatientDetails;
