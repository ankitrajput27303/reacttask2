
import React, { useState } from 'react';
import Style from "./Style.module.css"

function App() {
  
  const [count, setCount] = useState(0);
 
  return (
    <div className = {Style.container} >
      <p>You clicked -[ {count} ]- times</p>
      <button onClick={() => setCount(count + 1)}> Click me Increase</button>

      <button onClick={() => setCount(count <= 0 ? count : count - 1)}> Click me Decrease </button>
    </div>
  );
}

export default App;