import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PatientContext } from "../context/PatientContext";

const RoomStatus = () => {
  const { id } = useParams();
  const { patients, updateRoomStatus } = useContext(PatientContext);

  const patient = patients.find(p => p.id.toString() === id);
  const [status, setStatus] = useState("Available");

  if (!patient) return null;

  return (
    <div>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Available">Available</option>
        <option value="Occupied">Occupied</option>
      </select>

      <button onClick={() => updateRoomStatus(patient.id, status)}>
        Update Status
      </button>

      <p>Room Status: {patient.roomStatus}</p>
    </div>
  );
};

export default RoomStatus;
