import { useState } from "react";

function SeatGrid() {
  const [selectedSeat, setSelectedSeat] = useState("");

  const seats = [
    "A1","A2","A3","A4",
    "B1","B2","B3","B4",
    "C1","C2","C3","C4"
  ];

  return (
    <div>

      <h2>Selected Seat : {selectedSeat}</h2>

      <div className="seat-grid">

        {seats.map((seat) => (
          <button
            key={seat}
            className={
              selectedSeat === seat
                ? "seat active-seat"
                : "seat"
            }
            onClick={() => setSelectedSeat(seat)}
          >
            {seat}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SeatGrid;