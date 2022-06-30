import React, { Component } from "react";
import Bell_Icon from "./Bell_Icon.jpg";
import Bell_icon2 from "./Bell_icon2.jpg";

class Subscribe extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      message: "Please Subscribe to My Channel",
      sub: "Subscribe",
      imageURL: Bell_Icon
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple",
  };

  Buttonchange = ()=>{
      this.setState({
          message: "Hit the Bell Icon to Never Miss an Update",
          sub: "Subscribed"
      })
  }

  ImageChange = ()=>{
    this.setState({
        message: `Thank you, Happy Learning!`,
        imageURL: Bell_icon2
  }) 
}

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <br/>
        <img style ={{width:"80px", height:"80px"}} src = {this.state.imageURL} 
        onClick={this.ImageChange}
        alt= ""/>
      </div>
    );
  }
}

export default Subscribe;
