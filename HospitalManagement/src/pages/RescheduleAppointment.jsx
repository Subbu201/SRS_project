import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/reschedule.css";

const RescheduleAppointment = () => {
  const [state, dispatch] = useContext(AppContext);
  const [appointment, setAppointment] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minDate, setMinDate] = useState("");
  const [isValidSelection, setIsValidSelection] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = new URLSearchParams(location.search).get("appointmentId");
    const found = state.appointments.find(a => a.id.toString() === id);
    setAppointment(found);
    
    // Set minimum date to today
    const today = new Date();
    const minDateString = today.toISOString().split('T')[0];
    setMinDate(minDateString);
  }, [location.search, state.appointments]);

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const validateSelection = (selectedDate, selectedTime) => {
    if (!selectedDate || !selectedTime) {
      setIsValidSelection(false);
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const selected = new Date(`${selectedDate}T${selectedTime}`);
    const now = new Date();

    if (selectedDate === today) {
      const currentTime = getCurrentTime();
      setIsValidSelection(selectedTime > currentTime);
    } else {
      setIsValidSelection(selected > now);
    }
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    validateSelection(newDate, time);
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setTime(newTime);
    validateSelection(date, newTime);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidSelection) {
      showToast("Please select a valid future date and time", "error");
      alert("Please select a valid future date and time");
      return;
    }

    dispatch({
      type: "RESCHEDULE_APPOINTMENT",
      payload: { id: appointment.id, date, time }
    });

    alert("Appointment rescheduled successfully ✓");
    navigate("/patient-dashboard");
  };
   return <div className="reschedule-container">
    <p style={{textAlign: 'center', color: '#d81b60'}}>Invalid appointment</p></div>;
 
};

export default RescheduleAppointment;
