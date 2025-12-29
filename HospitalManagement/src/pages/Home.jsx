import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="box">
        
      <h1>MediSync+ Outpatient Management System</h1>
      <p>Smart • Secure • Efficient Outpatient Care Management</p>
      <br/>
</div>
      <div className="card-section">
        <div className="card">
          <h3>Patient Registration</h3>
          <button onClick={() => navigate("/register")}>Register Patient</button>
        </div>

        <div className="card">
          <h3>Appointments</h3>
          <button onClick={() => navigate("/appointment")}>Book Appointment</button>
        </div>

        <div className="card">
          <h3>Doctor Dashboard</h3>
          <button onClick={() => navigate("/doctor")}>View Dashboard</button>
        </div>

        <div className="card">
          <h3>Visit Records</h3>
          <button onClick={() => navigate("/reports")}>View Visits</button>
        </div>
      </div>

      <div className="footer-quote">
        “Good healthcare is a right, not a privilege.”
      </div>
    </div>
  );
};

export default Home;
