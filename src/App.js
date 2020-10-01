import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Todo from './Todo';
import About_us from './About_us';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Todo" component={Todo} />
                <Route path="/Contact" component={Contact} />
                <Route path="/About_us" component={About_us} />
            
            </Switch>
        </main>
    )
}


export default App;
