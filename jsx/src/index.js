// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = () => {
  const buttonText = "Click Me!";
  const labelText = "Enter Name";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take a React componenet and show it on a screen
ReactDOM.render(<App />, document.querySelector("#root"));
