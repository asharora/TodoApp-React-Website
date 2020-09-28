import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Get_started.css';
function Get_started() {
    return (
       <div id="page">
           <div id="links"><Link to="/home">Get Started</Link></div>
    
       </div>
        )
}


export default Get_started;
