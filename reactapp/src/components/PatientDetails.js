import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

const PatientDetails = () => {
  const { id } = useParams();
  const { patients } = useContext(PatientContext);
  const navigate = useNavigate();

  const patient = patients.find(p => p.id.toString() === id);
  if (!patient) return <p>Patient not found</p>;

  return (
    <div>
      <p>{patient.name}</p>
      <p>Age: {patient.age}</p>

      <button onClick={() => navigate(`/room/${patient.id}`)}>
        Update Room Status
      </button>
    </div>
  );
};

export default PatientDetails;
