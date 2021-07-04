import './App.css';
import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment} from "./Actions";



function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={ () => dispatch(increment)}>+</button>      
        
        <p>
          Counter is: {counter}
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
