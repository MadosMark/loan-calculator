import "./App.css";
import React from "react";
import { Slider } from "@mui/material";

function App() {
  const [valueOne, setValue] = React.useState(20000);
  const [valueTwo, setValueTwo] = React.useState(2);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleChangeSecond = (e, newValueTwo) => {
    setValueTwo(newValueTwo);
  };

  const amount = valueOne;
  const years = valueTwo;
  const interest = 0.00825;
  const months = years * 12;
  const calculation = Math.pow(1 + interest, months);
  const monthly = (amount * calculation * interest) / (calculation - 1);
  let monthlyPayment = Math.ceil(monthly);

  return (
    <div className="container">
      <div className="wrapper">
        <p>Lånekalkyl</p>
        <div className="slider_wrapper">
          <p className="choose_payment">Välj Lånebelopp</p>
          <Slider
            defaultValue={20000}
            aria-label="Default"
            step={10000}
            min={20000}
            max={200000}
            value={valueOne}
            onChange={handleChange}
            color="warning"
          />
          <p className="value">{valueOne} kr</p>
          <p className="choose_time">Välj Återbetalningstid</p>
          <Slider
            className="slider_two"
            defaultValue={2}
            aria-label="Default"
            step={1}
            min={2}
            max={10}
            value={valueTwo}
            onChange={handleChangeSecond}
            color="warning"
          />
          <p className="value">{valueTwo} år</p>
        </div>
        <div className="monthly_payment_wrapper">
          <p>Månadskostnad:</p>
          {valueTwo ? (
            <p>{monthlyPayment}kr/månad</p>
          ) : (
            <p className="calculation">Uträkning kommer visas här</p>
          )}
        </div>
      </div>
      <button className="button_wrapper">
        <a href={`loan-application/?amount=${valueOne}&months=${valueTwo}`}>
          Till Ansökan
        </a>
      </button>
    </div>
  );
}

export default App;
