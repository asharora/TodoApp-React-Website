import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './About_us.css';
function About_us() {
    return (
      <div><div className="about-section">
      <h1 style={{backgroundColor:"transparent"}}>About Us</h1>
      <p>We have Developed the React JS  Todo App.</p>
     </div>
    
    <div style={{textAlign:"center"}}>
    <h2>Our Team</h2>
    
    </div>
    <div className="row">
      {/* <div className="column">
        <div className="card">
          <img src="/w3images/team1.jpg" alt="Jane" style={{width:"100%"}}/>
          <div className="container">
            <h2>Jane Doe</h2>
            <p className="title">CEO & Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>jane@example.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
    
      <div className="column">
        <div className="card">
          <img src="/w3images/team2.jpg" alt="Mike" style={{width:"100%"}}/>
          <div className="container">
            <h2>Mike Ross</h2>
            <p className="title">Art Director</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>mike@example.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
     */}
      <div className="column">
        <div className="card">
          <img src={require("../src/Profile.jpeg")} alt="Ashish Arora" style={{ borderRadius:"50%",height:"200px"}}/>
          <div className="container">
            <h2>Ashish Arora</h2>
            <p className="title">Developer and Designer</p>
            <p>Flutter and React Js Developer</p>
            <p>ashisharora111122@gmail.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
      </div>    )
}


export default About_us;
