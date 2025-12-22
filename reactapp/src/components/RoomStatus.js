import React, { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useParams, useNavigate } from "react-router-dom";

const RoomStatus = () => {
  const { id } = useParams();
  const { patients, updateRoomStatus } = useContext(PatientContext);
  const navigate = useNavigate();

  const patient = patients.find((p) => p.id.toString() === id);
  const [status, setStatus] = useState("Available");

  if (!patient) return <p>Patient not found</p>;

  return (
    <div>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Available">Available</option>
        <option value="Occupied">Occupied</option>
      </select>

      <button onClick={() => updateRoomStatus(patient.id, status)}>
        Update Status
      </button>

      <button onClick={() => navigate(`/patient/${patient.id}`)}>
        Back to Patient
      </button>
    </div>
  );
};

export default RoomStatus;
