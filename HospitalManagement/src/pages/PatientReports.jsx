// src/pages/PatientReports.jsx
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/form.css";

const PatientReports = () => {
  const [state] = useContext(AppContext);
  const [patientId, setPatientId] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const patient = state?.patients?.find(p => p.id.toString() === patientId);
  const patientAppointments = patient 
    ? state?.appointments?.filter(a => a.patientId === patient.id) || []
    : [];

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div className="form-container">
      <h2>Patient Reports</h2>
      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={e => setPatientId(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", width: "200px" }}
        />
        <button onClick={handleSearch} style={{ padding: "10px 20px" }}>Search</button>
      </div>

      {searchClicked && !patient ? (
        <p>No patient found with ID: {patientId}</p>
      ) : searchClicked && patient ? (
        <div>
          <div style={{ marginBottom: "30px", border: "1px solid #ddd", padding: "15px", borderRadius: "5px" }}>
            <h3>Patient Details</h3>
            <p><strong>ID:</strong> {patient.id}</p>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Email:</strong> {patient.email}</p>
            <p><strong>Address:</strong> {patient.address}</p>
          </div>

          <div>
            <h3>Appointment History</h3>
            {patientAppointments.length === 0 ? (
              <p>No appointments for this patient</p>
            ) : (
              <table className="patient-table">
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Symptoms</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patientAppointments.map((a) => (
                    <tr key={a.id}>
                      <td>{a.doctorName || "N/A"}</td>
                      <td>{a.symptoms || "N/A"}</td>
                      <td>{a.date || "N/A"}</td>
                      <td>{a.time || "N/A"}</td>
                      <td>{a.status || "Booked"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PatientReports;
