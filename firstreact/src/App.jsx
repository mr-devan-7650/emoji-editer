import React, { useState } from "react";
import "./App.css";

function App() {
  const emojis = ["✈️", "🌟", "🚀", "🌞", "🛸", "🌈", "🛰️", "🌍", "🪐", "👋"];
  const colors = ["#ffffff", "#ffcc00", "#ff6666", "#ff99ff", "#99ff99", "#66ccff", "#009933", "#cccccc", "#ff9966"];

  const [selectedEmoji, setSelectedEmoji] = useState("🛰️");
  const [bgColor, setBgColor] = useState("#ff99ff");
  const [size, setSize] = useState(100);

  const resetAll = () => {
    setSelectedEmoji("🛰️");
    setBgColor("#ff99ff");
    setSize(100);
  };

  return (
    <div className="app">
      <h1>
       Emoji editor <span className="blue">App</span>
      </h1>
      <p>
        This is a simple React app 
      </p>

      <div className="container">
        
        <div className="emoji-list">
          {emojis.map((emoji, i) => (
            <button key={i} onClick={() => setSelectedEmoji(emoji)} className="emoji-btn">
              {emoji}
            </button>
          ))}
        </div>

      
        <div className="emoji-display" style={{ backgroundColor: bgColor }}>
          <span style={{ fontSize: `${size}px` }}>{selectedEmoji}</span>
        </div>

       
        <div className="color-list">
          {colors.map((color, i) => (
            <button
              key={i}
              style={{ backgroundColor: color }}
              onClick={() => setBgColor(color)}
              className="color-btn"
            ></button>
          ))}
        </div>
      </div>

      
      <input
        type="range"
        min="50"
        max="200"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

     
      <div>
        <button className="reset-btn" onClick={resetAll}>
          🔄
        </button>
      </div>
    </div>
  );
}

export default App;
