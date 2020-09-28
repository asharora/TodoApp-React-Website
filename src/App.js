import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './Home';
import Get_started from './Get_started';


function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Get_started} exact />
                <Route path="/home" component={home} />
            </Switch>
        </main>
    )
}


export default App;
