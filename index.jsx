import React from "react";
import '../styles/App.css';
const App = () => {

  let [count, setCount] = useState(0);

  return(
    <div className="ball">
      <h1 className="count" onDoubleClick={()=>{alert("can edit it")}}>{count}</h1>
      <button className="increment-button" onClick={()=>{setCount(count + 1)}}>Increment</button>
    </div>
  );
}

