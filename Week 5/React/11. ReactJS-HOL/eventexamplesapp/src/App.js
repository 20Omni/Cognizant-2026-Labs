import React, { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Member");
  }

  function handleIncrement() {
    increment();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function onPress() {
    alert("I was clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const euro = amount / 80;

    alert("Converting to Euro Amount is " + euro);
  }

  return (
    <div style={{ marginLeft: "50px", marginTop: "20px" }}>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <br /><br />

      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("welcome")}>
        Say Welcome
      </button>

      <br /><br />

      <button onClick={onPress}>
        Click on me
      </button>

      <br /><br /><br />

      <h1 style={{ color: "green" }}>
        Currency Convertor!!!
      </h1>

      <form onSubmit={handleSubmit}>

        <label>Amount: </label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br /><br />

        <label>Currency: </label>

        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default App;