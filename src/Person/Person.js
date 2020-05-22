import React from 'react'
import './Person.css'

 const person=(props)=>{
    const style={
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }; 
    return(
        <div className={"Person "+ props.classlist}>
            <p onClick={props.click}> I am {props.name} and I'm {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
        </div>
     ) 
 };
 export default person;