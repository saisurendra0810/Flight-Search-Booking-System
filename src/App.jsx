import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FlightSearch from "./pages/FlightSearch";
import SeatSelection from "./pages/SeatSelection";
import BookingSystem from "./pages/BookingSystem";
import UserAuthentication from "./pages/UserAuthentication";
import BookingHistory from "./pages/BookingHistory";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentGateway from "./pages/PaymentGateway";
import ETicketGeneration from "./pages/ETicketGeneration";
import Notifications from "./pages/Notifications";
import FiltersSorting from "./pages/FiltersSorting";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight-search" element={<FlightSearch />} />
      <Route path="/seat-selection" element={<SeatSelection />} />
      <Route path="/booking-system" element={<BookingSystem />} />
      <Route path="/user-authentication" element={<UserAuthentication />} />
      <Route path="/booking-history" element={<BookingHistory />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/payment-gateway" element={<PaymentGateway />} />
      <Route path="/e-ticket" element={<ETicketGeneration />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/filters-sorting" element={<FiltersSorting />} />
    </Routes>
  );
}

export default App;