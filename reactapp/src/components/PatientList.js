import React, { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { Link } from "react-router-dom";

const PatientList = () => {
  const { patients } = useContext(PatientContext);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            <Link to={`/patient/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
