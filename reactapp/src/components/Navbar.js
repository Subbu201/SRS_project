import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Patient List</Link>{" "}
      <Link to="/add">Add Patient</Link>
    </nav>
  );
}
