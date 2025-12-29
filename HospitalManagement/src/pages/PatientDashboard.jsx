import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../styles/form.css";

const PatientDashboard = () => {
  const [state, dispatch] = useContext(AppContext);
  const navigate = useNavigate();
  const [patientId, setPatientId] = useState("");

  if (!state || !state.appointments) return <p>Loading...</p>;

  // Filter appointments safely
  const patientAppointments = state.appointments?.filter(
    a => a.patientId && a.patientId.toString() === patientId
  ) || [];

  const cancelAppointment = (id) => {
    const appointment = patientAppointments.find(a => a.id === id);
    if ((appointment.cancellationCount || 0) >= 1) {
      alert("This appointment has already been cancelled. No further actions allowed.");
      return;
    }
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      dispatch({ type: "CANCEL_APPOINTMENT", payload: id });
    }
  };

  const rescheduleAppointment = (id) => {
    navigate(`/reschedule?appointmentId=${id}`);
  };

  return (
    <div className="form-container1">
      <h2>My Appointments</h2>
      <div id="pat">
      <input
        type="number"
        placeholder="Enter your Patient ID"
        value={patientId}
        onChange={e => setPatientId(e.target.value)}
        />
        </div>

      {patientAppointments.length === 0 ? (
        <p>No appointments booked.</p>
      ) : (
        <table className="patient-table">
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Symptoms</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patientAppointments.map(a => (
              <tr key={a.id}>
                <td>{a.doctorName}</td>
                <td>{a.symptoms}</td>
                <td>{a.date}</td>
                <td>{a.time}</td>
                <td>{a.status}</td>
                <td>
                  {a.status === "Cancelled" ? (
                    <span>Cancelled (No more actions)</span>
                  ) : a.status === "Booked" || a.status === "Rescheduled" ? (
                    <>
                      <button
                        className="btn-danger"
                        onClick={() => cancelAppointment(a.id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn-warning"
                        onClick={() => rescheduleAppointment(a.id)}
                      >
                        Reschedule
                      </button>
                    </>
                  ) : (
                    <span>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PatientDashboard;
