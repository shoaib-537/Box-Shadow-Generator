import React, { useState } from "react";
import "./App.css";

function App() {
  const [hori, setHori] = useState(10);
  const [veri, setVeri] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("yellow");
  const [checkon, setCheckon] = useState(false);

  return (
    <div className="App">
      <div className="controls">
        <label>Horizontel Length</label>
        <input
          type="range"
          min="-200"
          max="100"
          value={hori}
          onChange={(e) => setHori(e.target.value)}
        />
        <label>Vertical Length</label>
        <input
          type="range"
          min="-200"
          max="100"
          value={veri}
          onChange={(e) => setVeri(e.target.value)}
        />
        <label>Blur </label>
        <input
          type="range"
          min="0"
          max="100"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <br />
        <br />

        <label>Color </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="switch">
          <br />
          <label>
            Outline
            <input
              type="checkbox"
              checked={checkon}
              onChange={() => setCheckon(!checkon)}
            />
            <span className="lever"></span>
            inset
          </label>
        </div>
      </div>
      <div className="output">
        <div
          className="box"
          style={{
            boxShadow: `${
              checkon ? "inset" : ""
            } ${hori}px ${veri}px ${blur}px ${color} `,
          }}
        >
          <p>
            box-shadow:{hori}px {veri}px {color}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
