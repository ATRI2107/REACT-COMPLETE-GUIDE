import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi this is a React App</h1>
        <Person name="Atri" age="20"/>
      </div>
    );
  }
}

export default App;
