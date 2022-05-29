import "./App.css";
import React from "react";
import { Slider } from "@mui/material";

function App() {
  const [value, setValue] = React.useState(20000);
  const [valuee, setValuee] = React.useState(2);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleChangee = (e, newValuee) => {
    setValuee(newValuee);
  };
  const amount = value;
  const years = valuee;
  const interest = 0.00825;
  const months = years * 12;
  const x = Math.pow(1 + interest, months);
  const monthly = (amount * x * interest) / (x - 1);
  let monthlyPayment = Math.ceil(monthly);

  return (
    <div className="container">
      <div className="wrapper">
        <p>Lånekalkyl</p>
        <div className="slider">
          <p className="choose">Välj Lånebelopp</p>
          <Slider
            defaultValue={20000}
            aria-label="Default"
            step={10000}
            min={20000}
            max={200000}
            value={value}
            onChange={handleChange}
            color="warning"
          />
          <p className="value">{value} kr</p>
          <p className="choose">Välj Återbetalningstid</p>
          <Slider
            className="slide"
            defaultValue={2}
            aria-label="Default"
            step={1}
            min={2}
            max={10}
            value={valuee}
            onChange={handleChangee}
            color="warning"
          />
          <p className="value">{valuee} år</p>
        </div>

        <p>Månadskostnad:</p>
        {valuee ? (
          <p>{monthlyPayment}kr/månad</p>
        ) : (
          <p className="calc">Uträkning kommer visas här</p>
        )}
      </div>
      <button className="button">
        <a href={`loan-application/?amount=${value}&months=${valuee}`}>
          Till Ansökan
        </a>
      </button>
    </div>
  );
}

export default App;
