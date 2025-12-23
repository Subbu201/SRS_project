import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PatientContext } from "../context/PatientContext";

const PatientDetails = () => {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find(p => p.id.toString() === id);
  if (!patient) return null;

  return (
    <div>
      <p>{patient.name}</p>
      <p>Age: {patient.age}</p>
      <p>Room Status: {patient.roomStatus}</p>

      <Link to={`/room/${patient.id}`}>
        Update Room Status
      </Link>
    </div>
  );
};

export default PatientDetails;
