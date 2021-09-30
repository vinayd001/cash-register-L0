import "./styles.css";

import React, { useState } from "react";
import ReturnChange from "./ReturnChange";

export default function App() {
  const [bill, setBill] = useState(null);
  const [cash, setCash] = useState(null);
  const [showCashContainer, setCashContainer] = useState(null);
  const [error, setError] = useState(null);
  const [changeLeft, setChangeLeft] = useState([]);
  // const [moneyLeft, setMoneyLeft] = useState(0);

  const notes = [2000, 500, 100, 20, 10, 5, 1];

  const billChange = (e) => {
    const newBill = e.target.value;
    if (newBill > 0) {
      setBill(newBill);
    } else {
      setBill(null);
    }
  };

  const cashChange = (e) => {
    const newCash = e.target.value;
    if (newCash > 0) {
      setCash(newCash);
    } else {
      setCash(null);
    }
  };

  const nextClick = () => {
    if (bill > 0) setCashContainer(1);
  };

  const handleSubmit = () => {
    let error = cash === bill ? 1 : null;
    error = cash < bill && cash < 0 ? 2 : error;
    error = error !== 1 && error !== 2 ? 3 : error;
    setError(error);

    let moneyLeft = cash - bill;
    const arr = notes.map((note) => {
      let count = 0;
      if (moneyLeft > 0 && note <= moneyLeft) {
        count = Math.floor(moneyLeft / note);
        moneyLeft -= count * note;
      }
      return count;
    });
    setChangeLeft([...arr]);
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Cash Register Manager</h1>
        <p>
          Enter the bill amount and cash given by the customer and know minimum
          number of notes to return
        </p>
      </div>
      <div className="bill-container">
        <div className="bill-amount">Bill Amount</div>
        <div className="input-div">
          <input
            onChange={billChange}
            type="text"
            placeholder="Enter the bill amount"
          />
        </div>
        {!showCashContainer ? (
          <button onClick={nextClick} type="submit" value="next">
            Next
          </button>
        ) : null}
      </div>
      {showCashContainer ? (
        <div className="cash-container">
          <div className="cash-given">Cash Given</div>
          <div className="input-div">
            <input
              onChange={cashChange}
              type="text"
              placeholder="Enter the cash amount"
            />
          </div>
          <button onClick={handleSubmit} type="submit" value="submit">
            Submit
          </button>
        </div>
      ) : null}
      <ul>
        {error === 1 ? "No amount should be returned" : null}
        {error === 2
          ? "Enter valid bill amount and cash given to continue"
          : null}
        <ReturnChange show={error === 3} cashLeft={changeLeft} notes={notes} />
      </ul>
    </div>
  );
}
