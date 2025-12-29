
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/form.css";

const DoctorDashboard = () => {
  const [state, dispatch] = useContext(AppContext);

  const handleCancel = id => {
    if (window.confirm("Cancel this appointment?")) {
      dispatch({ type: "CANCEL_APPOINTMENT", payload: id });
    }
  };

  return (
    <div className="form-container1">
      <h2>Doctor Dashboard</h2>
      {state.doctors.map(d => {
        const doctorAppointments = state.appointments.filter(a => a.doctorId === d.id);
        return (
          <div key={d.id} className="doctor-card">
            <h3>{d.name} ({d.specialization})</h3>
            {doctorAppointments.length === 0 ? <p>No appointments yet.</p> :
              <table className="patient-table">
                <thead>
                  <tr>
                    <th>Patient</th><th>Symptoms</th><th>Date</th><th>Time</th><th>Status</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                 {doctorAppointments.map((a) => (
                    <tr key={a.id}>
                      <td>{a.patientName}</td>
                      <td>{a.symptoms}</td>
                      <td>{a.date}</td>
                      <td>{a.time}</td>
                      <td>{a.status}</td>
                      
                         <td>
                         {a.status === "Cancelled" ? (
                          <span>Cancelled</span>
                        ) : (
                          <button
                            className="btn-danger"
                            onClick={() => handleCancel(a.id)}
                          >
                            Cancel
                          </button>
                        )}
                        

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
        );
      })}
    </div>
  );
};

export default DoctorDashboard;
