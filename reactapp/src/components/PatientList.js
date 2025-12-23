import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";
import { useNavigate } from "react-router-dom";
import "../App.css"

const PatientList = () => {
  const { patients } = useContext(PatientContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Patients</h2>

      {patients.length === 0 && <p>No patients available</p>}

      <ul id="link">
        {patients.map(p => (
          <li key={p.id} onClick={() => navigate(`/patient/${p.id}`)}>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
