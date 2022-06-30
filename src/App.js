import React, {Component} from 'react';
import './App.css';
import Subscribe from './Component/Subscribe';
import Welcome from './Component/Welcome';

class App extends React.Component{
    
     render(){
      let username = ""; 
      const userHandler = (user) =>{
        username = this.user;
        console.warn(user);
    }
    return (
      <div className='App'> 
        <Welcome newUser = {userHandler}/>
        <Subscribe newUser = {username}/>
      </div>
    )
  }
}
export default App;
