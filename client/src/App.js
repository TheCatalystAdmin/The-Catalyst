import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [selected, setSelected] = useState(null);
  const highlight = window.getSelection().toString();

  useEffect(() => {
    if (window.getSelection().toString() === "") {
      setSelected(null);
    }
  }, [highlight])

  const handleSelection = () => {
    const selection = window.getSelection();
    let text = selection.toString();
    //Make the selection bold
    text = text.bold()
    setSelected(text);
  }

  return (
    <div className="App">
      <h1>The Catalyst</h1>
      <div contentEditable={"true"} className="input" onMouseUp={handleSelection} >
        asasas
        </div>
      <div className="output">
        <p>{selected}</p>
      </div>
    </div>
  );
}

export default App;
