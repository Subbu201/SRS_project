import React, { createContext, useState } from "react";

export const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const updateRoomStatus = (id, status) => {
    setPatients(
      patients.map((p) =>
        p.id === id ? { ...p, roomStatus: status } : p
      )
    );
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient, updateRoomStatus }}>
      {children}
    </PatientContext.Provider>
  );
};
