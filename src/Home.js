import React, { Component,useState } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';


function Home() {
    var i = 0;
    var color = ["https://www.weekendnotes.com/im/000/00/the-todo-game11.JPG", "blue", "brown", "green"];
    const [bgcolor,setbgcolor]=useState(color[0]);
    
    function change() {
    console.log('old i = ${i}',i);
    //var doc = document.getElementById("background");
    setbgcolor(color[i]);
    i = (i + 1) %4 ;
    console.log('new  i = ${i}',i);
    }
    //setInterval(change, 5000);
    
    return (
       <div id="page" style={{backgroundImage:"url(https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/pages/gx/main/gx__vid-cover--gx@2x.55059b0a2f78.jpg)",backgroundRepeat:"no-repeat", backgroundSize:"cover",}}>
           <div>
           <nav id="navbar">
               <img src={require("../src/logo.png")} />
               <ul>
                   <li><a class="lis" href="/">Home</a></li>
                   <li><a class="lis" href="/Todo">Todo</a></li>
                   <li><a class="lis" href="/Contact">Contact</a></li>
                   <li><a class="lis" href="/About_us">About Us</a></li>
                      
                </ul>
           </nav>
           </div>
            <div id="get_started">
            <h1 id="todo-title">Welcome to Todo App</h1>
            <button><a href="/Todo">Get Started</a></button>
        
            </div>
          </div>
        )
}


export default Home;
