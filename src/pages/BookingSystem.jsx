function BookingSystem() {
  return (
    <div className="page">

      <h1>Booking System</h1>

      <form className="booking-form">

        <input
          type="text"
          placeholder="Passenger Name"
        />

        <input
          type="text"
          placeholder="Flight Number"
        />

        <button>
          Confirm Booking
        </button>

      </form>

    </div>
  );
}

export default BookingSystem;