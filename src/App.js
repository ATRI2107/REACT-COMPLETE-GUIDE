import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state={
    persons:[
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    otherState: 'some other value'
  }
  switchHandler=()=>{
    this.setState({
      persons:[
        {name: "Maxmillan", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1> Hi this is a React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hello There</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hello There</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hello There</Person>
      </div>
    );
  }
}

export default App;
