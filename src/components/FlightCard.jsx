function FlightCard({ flightNo, from, to, price }) {
  return (
    <div className="flight-card">

      <h3>{flightNo}</h3>

      <p>
        {from} → {to}
      </p>

      <h4>₹{price}</h4>

      <button>Select</button>

    </div>
  );
}

export default FlightCard;