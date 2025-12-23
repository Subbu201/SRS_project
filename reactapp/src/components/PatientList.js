import React, { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { Link } from "react-router-dom";

 const PatientList = () => {
//   const patientsalready=[
//     {
//       name : John Doe,
//       age : 45
//     },
//     {
//       name:
//     }
// ]
  const { patients } = useContext(PatientContext);

  return (
    <div>
      <h2>Patient List</h2>

      {patients.length === 0 && <p>No patients available</p>}

      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            {p.name} - {p.roomStatus || "Not Assigned"}{" "}
            <Link to={`/room/${p.id}`}>Update Room</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
