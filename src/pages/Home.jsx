import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ModuleCard from "../components/ModuleCard";

function Home() {

  const navigate = useNavigate();

  const modules = [
    { title: "Flight Search", path: "/flight-search" },
    { title: "Seat Selection", path: "/seat-selection" },
    { title: "Booking System", path: "/booking-system" },
    { title: "User Authentication", path: "/user-authentication" },
    { title: "Booking History", path: "/booking-history" },
    { title: "Admin Dashboard", path: "/admin-dashboard" },
    { title: "Payment Gateway Mock", path: "/payment-gateway" },
    { title: "E Ticket Generation", path: "/e-ticket" },
    { title: "Notifications", path: "/notifications" },
    { title: "Filters & Sorting", path: "/filters-sorting" }
  ];

  return (
    <>
      <Navbar />

      <div className="home">

        <h1>Flight Search & Booking System</h1>

        <p>Book Flights Easily & Quickly</p>

        <div className="module-grid">

          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              onClick={() => navigate(module.path)}
            />
          ))}

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;