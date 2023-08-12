import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";
function App() {
  var userName="Ali"
  var [count, setCount] = useState(0);
  const minimize = () => {
    setCount(--count);
  };

  const maximize = () => {
    setCount(++count);
  };
  const Reset =()=>{
    setCount(0);
  }
  console.log("userName in console", userName);
  return (
    <div className='text-center'>
      <h1 className='text-center'>Counter App </h1>
      <div className='mt-5'>
      <button className='btn btn-primary btn-lg mx-auto' style={{paddingLeft:"20px",paddingRight:"20px"}} onClick={minimize}>-</button>
      <span className='p-3 h3 '>{count}</span>
      <button className='btn btn-primary btn-lg mx-auto' style={{paddingLeft:"20px",paddingRight:"20px"}} onClick={maximize}>+</button><br/>
      <button className='btn btn-dark btn-lg mx-auto mt-5' onClick={Reset}>Reset All</button>
      </div>
    </div>
  );
}

export default App;
