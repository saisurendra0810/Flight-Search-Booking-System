import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>✈ Flight Booking System</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Navbar;