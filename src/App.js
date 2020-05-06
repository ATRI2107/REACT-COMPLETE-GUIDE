import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
const app=props => {
 
    const [personState, setPersonState]=useState({
      persons:[
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 26}
      ],
      otherState: 'some other value'
    });
    const switchHandler=(newName)=>{
      setPersonState({
        persons:[
          {name: newName, age: 28},
          {name: "Manu", age: 29},
          {name: "Stephanie", age: 27}
        ]
      });
    };
    const nameChangeHandler=(event)=>{
      setPersonState({
        persons:[
          {name: "Max", age: 28},
          {name: event.target.value, age: 29},
          {name: "Stephanie", age: 27}
        ]
      });
    }
    console.log(personState) 
    return (
      <div className="App">
        <h1> Hi this is a React App</h1>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>Hello There</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age} click={()=> switchHandler("Maxi")}
          changed={nameChangeHandler}
        >
          Hello There</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}>Hello There</Person>
        <button onClick={()=> switchHandler("Maxmillian")}>Switch Names</button>
      </div>
    );
  
}

export default app;