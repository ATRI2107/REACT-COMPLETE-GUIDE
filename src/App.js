import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'
const app=props => {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const [personState, setPersonState]=useState({
      persons:[
        {name: "Max", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 26}
      ],
      otherState: 'some other value',
      showPersons: false
    });

    const toggleHandler=()=>{
      const doesShow=personState.showPersons;
      setPersonState({
        persons:[
          {name: "Max", age: 28},
          {name: "Manu", age: 29},
          {name: "Stephanie", age: 26}
        ],
        showPersons: !doesShow
      })
    }
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
        {
          personState.showPersons?
          <div>
              <Person name={personState.persons[0].name} age={personState.persons[0].age} />
              <Person name={personState.persons[1].name} age={personState.persons[1].age} click={()=> switchHandler("Maxi")}
              changed={nameChangeHandler}/>
              <Person name={personState.persons[2].name} age={personState.persons[2].age} />
          </div>
          : null
        }
        
        <button style={style} onClick={toggleHandler}>Switch Names</button>
      </div>
    );
  
}

export default app;