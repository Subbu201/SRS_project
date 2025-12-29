import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  patients: JSON.parse(localStorage.getItem("patients")) || [],
  doctors: [
    { id: 1, name: "Dr. Arun", specialization: "General Physician" },
    { id: 2, name: "Dr. Meena", specialization: "Cardiologist" },
    { id: 3, name: "Dr. Raj", specialization: "Orthopedic" },
    { id: 4, name: "Dr. Sarathy", specialization: "Dermatologist" }
  ],
  appointments: JSON.parse(localStorage.getItem("appointments")) || [],
  visits: JSON.parse(localStorage.getItem("visits")) || []
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case "ADD_PATIENT":
      newState = { ...state, patients: [...state.patients, action.payload] };
      break;
    case "DELETE_PATIENT":
      newState = {
        ...state,
        patients: state.patients.filter(p => p.id !== action.payload),
        appointments: state.appointments.filter(a => a.patientId !== action.payload),
        visits: state.visits.filter(v => v.patientId !== action.payload)
      };
      break;
    case "ADD_APPOINTMENT":
      newState = { ...state, appointments: [...state.appointments, { ...action.payload, cancellationCount: 0 }] };
      break;
    case "CANCEL_APPOINTMENT":
      newState = {
        ...state,
        appointments: state.appointments.map(a =>
          a.id === action.payload 
            ? { ...a, status: "Cancelled", cancellationCount: 1 }
            : a
        )
      };
      break;
    case "RESCHEDULE_APPOINTMENT":
      newState = {
        ...state,
        appointments: state.appointments.map(a =>
          a.id === action.payload.id
            ? { ...a, date: action.payload.date, time: action.payload.time, status: "Rescheduled" }
            : a
        )
      };
      break;
    case "ADD_VISIT":
      newState = { ...state, visits: [...state.visits, action.payload] };
      break;
    default:
      newState = state;
  }
  localStorage.setItem("patients", JSON.stringify(newState.patients));
  localStorage.setItem("appointments", JSON.stringify(newState.appointments));
  localStorage.setItem("visits", JSON.stringify(newState.visits));
  return newState;
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
};
