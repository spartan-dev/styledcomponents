import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav'


const Router = () => (
    <Switch>
        <Route exact path ="/"  render={(props) => <Home/>}/>
        <Route path="/nav" component={Nav}/>
    </Switch>
)

export default Router;