import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

const RoomStatus = () => {
  const { id } = useParams();
  const { patients, updateRoomStatus } = useContext(PatientContext);
  const [status, setStatus] = useState("Available");

  const patient = patients.find(p => p.id.toString() === id);

  if (!patient) return <p>Patient not found</p>;

  return (
    <div>
      <p>{patient.name}</p>

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="Available">Available</option>
        <option value="Occupied">Occupied</option>
      </select>

      <button onClick={() => updateRoomStatus(patient.id, status)}>
        Update Status
      </button>

      {/* THIS WILL NOW UPDATE CORRECTLY */}
      <p>Room Status: {patient.roomStatus}</p>
    </div>
  );
};

export default RoomStatus;
