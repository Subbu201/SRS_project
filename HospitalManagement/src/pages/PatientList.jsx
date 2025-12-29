// src/pages/PatientList.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/form.css";

const PatientList = () => {
  const [state, dispatch] = useContext(AppContext);

  if (state.patients.length === 0) return (
    <div className="form-container">
      <h2>No Patients Registered</h2>
    </div>
  );

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      dispatch({ type: "DELETE_PATIENT", payload: id });
      alert("Patient deleted successfully ✓");
    }
  };

  return (
    <div className="form-container1">
      <h2>Registered Patients</h2>
      <div style={{ overflowX: "auto" }}>
        <table className="patient-table">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Phone</th>
              <th>Address</th><th>Blood Group</th><th>Weight (kg)</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.patients.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td><td>{p.name}</td><td>{p.age}</td><td>{p.gender}</td>
                <td>{p.phone}</td><td>{p.address}</td><td>{p.bloodGroup}</td><td>{p.weight}</td>
                <td>
                  <button className="btn-danger" onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
