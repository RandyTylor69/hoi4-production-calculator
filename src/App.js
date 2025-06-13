import React from "react";
import "./style.css";

function App() {
  const [eqProduced, setEqProduced] = React.useState(0);
  const [formData, setFormData] = React.useState({
    output: 1,
    effiCurr: 0,
    effiCap: 0,
    effiGain: 0,
    duration: 0,
  });
  function handleChange(e) {
    const { name, value } = e.target; // object destructuring
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    console.log(formData);
  }

  return (
    <main>
      <div className="stats-container">
        <header>
          <h1>Depayss' Production Calculator</h1>
          <p>Plug in the numbers and see how much equipment you can get.</p>
          <p>Round your input to the nearest tenth (140.5 {`->`} 141).</p>
        </header>

        <form>
          <p>Current Output</p>
          <input name="output" onChange={handleChange} placeholder="1.8"></input>
          <p>Current Efficiency</p>
          <input name="effiCurr" onChange={handleChange} placeholder="0.9"></input>
          <p>Efficiency Cap</p>
          <input name="effiCap" onChange={handleChange} placeholder="1.4"></input>
          <p>Efficiency gain</p>
          <input name="effiGain" onChange={handleChange} placeholder="0.03"></input>
          <p>Duration (days) </p>
          <input name="duration" onChange={handleChange} placeholder="365"></input>
        </form>

        <button onClick={handleSubmit}>Click to calculate</button>

        <div className="msg">
          <h2>
            You will obtain <span>{eqProduced}</span> equipment in the end.
          </h2>
        </div>
      </div>
    </main>
  );
}

export default App;
