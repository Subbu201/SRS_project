 import  { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/form.css";

const PatientRegister = () => {
  const [, dispatch] = useContext(AppContext);
  const [form, setForm] = useState({
    name: "", age: "", gender: "", phone: "", address: "", bloodGroup: "", weight: ""
  });
  const [phoneError, setPhoneError] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Validate phone in real-time
    if (name === "phone") {
      if (value && !/^\d{10}$/.test(value)) {
        setPhoneError("Phone number must be exactly 10 digits");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (Object.values(form).some(v => v === "")) {
      alert("Please fill all fields");
      return;
    }
    
    // Validate phone
    if (!/^\d{10}$/.test(form.phone)) {
      setPhoneError("Phone number must be exactly 10 digits");
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    dispatch({ type: "ADD_PATIENT", payload: { id: Date.now(), ...form } });
    alert("Patient registered successfully ✓");
    setForm({ name: "", age: "", gender: "", phone: "", address: "", bloodGroup: "", weight: "" });
    setPhoneError("");
  };

  return (
    <div className="form-container">
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          placeholder="Name" 
          value={form.name} 
          onChange={handleChange}
          required 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={form.age} 
          onChange={handleChange}
          required 
        />
        <select name="gender" value={form.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option><option>Female</option><option>Trans</option>
        </select>
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number (10 digits)" 
          value={form.phone} 
          onChange={handleChange}
          maxLength="10"
          required 
        />
        {phoneError && <div style={{color: '#f44336', fontSize: '13px', marginTop: '-15px', marginBottom: '15px', fontWeight: '500'}}>⚠ {phoneError}</div>}
        <input 
          name="address" 
          placeholder="Address" 
          value={form.address} 
          onChange={handleChange}
          required 
        />
        <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option>O+</option><option>O-</option><option>A+</option><option>A-</option>
          <option>B+</option><option>B-</option><option>AB+</option><option>AB-</option>
        </select>
        <input 
          type="number" 
          name="weight" 
          placeholder="Weight (kg)" 
          value={form.weight} 
          onChange={handleChange}
          required 
        />
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default PatientRegister;
