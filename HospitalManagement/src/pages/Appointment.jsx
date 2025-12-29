// src/pages/Appointment.jsx
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/form.css";

const Appointment = () => {
  const [state, dispatch] = useContext(AppContext);
  const [minDate, setMinDate] = useState("");

  const [data, setData] = useState({
    patientId: "",
    doctorId: "",
    date: "",
    time: "",
    symptoms: ""
  });

  useEffect(() => {
    const today = new Date();
    const minDateString = today.toISOString().split('T')[0];
    setMinDate(minDateString);
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  // Handle input changes
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();

    // Validate patient
    const patient = state.patients.find(p => p.id.toString() === data.patientId);
    if (!patient) {
      showToast("Patient not registered", "error");
      alert("Patient not registered");
      return;
    }

    // Validate doctor
    const doctor = state.doctors.find(d => d.id.toString() === data.doctorId);
    if (!doctor) {
      alert("Please select a doctor");
      return;
    }

    // Validate date and time
    const selectedDateTime = new Date(`${data.date}T${data.time}`);
    if (selectedDateTime <= new Date()) {
      alert("Please select a valid future date and time");
      return;
    }

    // Dispatch appointment
    dispatch({
      type: "ADD_APPOINTMENT",
      payload: {
        id: Date.now(),
        patientId: patient.id,
        patientName: patient.name,
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialization: doctor.specialization,
        date: data.date,
        time: data.time,
        symptoms: data.symptoms,
        status: "Booked"
      }
    });

    alert("Appointment booked successfully ✓");

    // Reset form
    setData({ patientId: "", doctorId: "", date: "", time: "", symptoms: "" });
  };

  const today = new Date().toISOString().split('T')[0];
  const currentTime = getCurrentTime();
  const isToday = data.date === today;
  const minTime = isToday ? currentTime : "00:00";

  return (
    <div className="form-container">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="patientId"
          placeholder="Patient ID"
          value={data.patientId}
          onChange={handleChange}
          required
        />

        <select name="doctorId" value={data.doctorId} onChange={handleChange} required>
          <option value="">Select Doctor</option>
          {state.doctors.map(d => (
            <option key={d.id} value={d.id}>
              {d.name} ({d.specialization})
            </option>
          ))}
        </select>

        <input 
          type="date" 
          name="date" 
          value={data.date} 
          onChange={handleChange}
          min={minDate}
          required 
        />
        <input 
          type="time" 
          name="time" 
          value={data.time} 
          onChange={handleChange}
          min={minTime}
          disabled={!data.date}
          required 
        />

        <input
          name="symptoms"
          placeholder="Symptoms"
          value={data.symptoms}
          onChange={handleChange}
        />

        <button type="submit">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default Appointment;
