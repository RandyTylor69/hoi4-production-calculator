import React from "react";
import "./style.css";

function App() {
  const [eqProduced, setEqProduced] = React.useState(0);
  const [formData, setFormData] = React.useState({
    milAssigned: 0,
    eqIC: 0,
    output: 1,
    effiCurr: 0,
    effiCap: 0,
    duration: 0,
  });
  function handleChange(e) {
    const { name, value } = e.target; // object destructuring
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    const dailyEffiGain =
      0.001 * (Math.pow(formData.effiCap, 2) / formData.effiCurr);
    for (let i = 1; i <= formData.duration; i++) {
      const dailyIC =
        formData.effiCurr * formData.output * formData.milAssigned * 4.5;
      const dailyEqProduced = dailyIC / formData.eqIC;
      // update the current efficiency daily growth
      setFormData((prev) => ({
        ...prev,
        effiGain: prev.effiGain + dailyEffiGain,
      }));
      // update the total equipment produced
      setEqProduced((prev) => prev + dailyEqProduced);
    }
  }

  function clearAll() {
    setEqProduced(0);
    setFormData({
      milAssigned: 0,
      eqIC: 0,
      output: 1,
      effiCurr: 0,
      effiCap: 0,
      duration: 0,
    });
  }
  return (
    <main>
      <div className="stats-container">
        <header>
          <h1>Depayss' Production Calculator</h1>
          <p>Plug in the numbers and see how much equipment you can get.</p>
          <p>Round your input to the nearest tenth (1.45 {`->`} 1.5).</p>
        </header>

        <form>
          <p>
            Factory Assigned{" "}
            <img src="https://hoi4.paradoxwikis.com/images/8/83/Military_factories.png"></img>{" "}
          </p>
          <input
            name="milAssigned"
            onChange={handleChange}
            placeholder="100"
          ></input>
          
          <p>
            Equipment IC{" "}
            <img src="https://hoi4.paradoxwikis.com/images/7/72/Allied_plans_button.png"></img>{" "}
          </p>
          <input name="eqIC" onChange={handleChange} placeholder="24"></input>
          <p>
            Current Output{" "}
            <img src="https://hoi4.paradoxwikis.com/images/f/fc/Production_output.png"></img>{" "}
          </p>
          <input
            name="output"
            onChange={handleChange}
            placeholder="1.8 (180%)"
          ></input>
          <p>
            Current Efficiency{" "}
            <img src="https://hoi4.paradoxwikis.com/images/c/cf/Production_efficiency.png"></img>
          </p>
          <input
            name="effiCurr"
            onChange={handleChange}
            placeholder="0.3 (30%)"
          ></input>
          <p>
            Efficiency Cap{" "}
            <img src="https://hoi4.paradoxwikis.com/images/c/ca/Production_efficiency_cap.png"></img>{" "}
          </p>
          <input
            name="effiCap"
            onChange={handleChange}
            placeholder="1.4 (140%)"
          ></input>
          <p>
            Duration (days){" "}
            <img src="https://hoi4.paradoxwikis.com/images/0/08/Time.png"></img>{" "}
          </p>
          <input
            name="duration"
            onChange={handleChange}
            placeholder="365"
          ></input>
        </form>

        <div className="btn-container">
<button onClick={clearAll}>Clear</button>
        <button onClick={handleSubmit}>Calculate</button>
        </div>

        

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
