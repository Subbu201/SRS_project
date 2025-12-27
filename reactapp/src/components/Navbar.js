import { useNavigate } from "react-router-dom";
import  "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="bar">
    <nav id="sp">
      <button onClick={() => navigate("/")}>Patient List</button>
      <button onClick={() => navigate("/add")}>Add Patient</button>
    </nav>
    </div>
  );
};

export default Navbar;
