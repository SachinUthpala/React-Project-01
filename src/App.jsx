/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

export default function App () {

  //use state
  const [message , setMessage] = useState("");
  const [ count , setCount] = useState(0);
  //make a data fetching function
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = res.json();
    setMessage(data);
    setCount ((c) => c + 1);
  }

  useEffect( function (){
    getAdvice();
  } , [])

  return (<div>
      <h1>Hello World</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <br />
      <Message count={count} message = {message} />
  </div>);
}


function Message(props) {
  return(
    <div>
      <p>{props.message}</p>
      <h2>Count : {props.count}</h2>
    </div>
  );
}

