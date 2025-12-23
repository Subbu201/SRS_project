import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { Link } from "react-router-dom";

export default function PatientList() {
  const { patients } = useContext(PatientContext);

  return (
    <div>
      <h2>Patient List</h2>

      {patients.map((p) => (
        <div key={p.id}>
          <Link to={`/patient/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}
