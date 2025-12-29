import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/form.css";

const VisitRecords = () => {
  const [state, dispatch] = useContext(AppContext);
  const [appointmentId, setAppointmentId] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");

  const appointment = state.appointments.find(a => a.id.toString() === appointmentId);

  const handleSubmit = e => {
    e.preventDefault();
    if (!appointment) {
      showToast("Invalid Appointment ID", "error");
      alert("Invalid Appointment ID");
      return;
    }
    if (!diagnosis || !prescription) {
      alert("All fields required");
      return;
    }

    const newVisit = {
      id: Date.now(),
      appointmentId: appointment.id,
      patientId: appointment.patientId,
      patientName: appointment.patientName,
      doctorName: appointment.doctorName,
      symptoms: appointment.symptoms,
      diagnosis,
      prescription,
      date: appointment.date
    };

    dispatch({ type: "ADD_VISIT", payload: newVisit });
    alert("Visit saved successfully ✓ription("");
  };

  return (
    <div className="form-container">
      <h2>Record Visit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Appointment ID"
          value={appointmentId}
          onChange={e => setAppointmentId(e.target.value)}
        />
        {appointment && <p><b>Symptoms:</b> {appointment.symptoms}</p>}
        <textarea placeholder="Diagnosis" value={diagnosis} onChange={e => setDiagnosis(e.target.value)} />
        <textarea placeholder="Prescription" value={prescription} onChange={e => setPrescription(e.target.value)} />
        <button type="submit">Save Visit</button>
      </form>
    </div>
  );
};

export default VisitRecords;
