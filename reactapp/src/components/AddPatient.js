import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const { addPatient } = useContext(PatientContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submit = () => {
    addPatient({ id: Date.now(), name, age });
    navigate("/");
  };

  return (
    <div>
      <h2>Add New Patient</h2>

      <input placeholder="Patient Name" onChange={e => setName(e.target.value)} />
      <br/>
      <br/>
      <input placeholder="Age" onChange={e => setAge(e.target.value)} />
      <br/>
      <br/>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default AddPatient;
