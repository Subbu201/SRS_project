import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PatientContext } from "../context/PatientContext";

export default function PatientDetails() {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);

  const patient = patients.find((p) => p.id === id);

  if (!patient) {
    return <p>Patient not found</p>;
  }

  return (
    <div>
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Room Status: {patient.roomStatus}</p>

      <Link to={`/room/${id}`}>Update Room Status</Link>
    </div>
  );
}
