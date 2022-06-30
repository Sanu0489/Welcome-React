import React, {useState} from "react";

function Welcome(props){
    const [name, setName] = useState('');

    const [usrName, setuserName] = useState(" ");

    const nameHandler = (event)=>{
        setuserName(event.target.value); 
        console.log(event.target.value);
    }

    const clickHandler = ()=>{
      setName(usrName);
      setuserName('');
    }
    
    props.newUser(name);
    console.warn(name);
    
    return (
      <div>
         <br />
         <h3 style={{fontStyle:"italic",color:"orchid"}}>Please Enter your name</h3> 
        <br/>
        <input type="text" value = {usrName} onChange={nameHandler}/>
        <br/><br/>
        <button onClick={clickHandler}>Click Me!</button>
        <h1 style={{fontStyle:"bold",color:"teal"}}>Welcome {name}</h1>
      </div>
    );
  }

export default Welcome;
