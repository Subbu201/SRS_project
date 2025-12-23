import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useNavigate } from "react-router-dom";

export default function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { addPatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const submitHandler = () => {
    addPatient({
      id: Date.now().toString(),
      name,
      age,
      roomStatus: "Available",
    });
    navigate("/");
  };

  return (
    <div>
      <input
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
}
