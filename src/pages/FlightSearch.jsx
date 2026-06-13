import FlightCard from "../components/FlightCard";

function FlightSearch() {
  return (
    <div className="page">

      <h1>Flight Search</h1>

      <div className="flight-container">

        <FlightCard
          flightNo="AI101"
          from="Hyderabad"
          to="Delhi"
          price="5000"
        />

        <FlightCard
          flightNo="AI202"
          from="Chennai"
          to="Mumbai"
          price="6500"
        />

      </div>

    </div>
  );
}

export default FlightSearch;