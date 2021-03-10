import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import AllCharacters from './pages/AllCharacters';
import Character from './pages/Characters';
import Home from './pages/Home';

import './style.css';
import './normalize.css';

const App = () => (
    <>  
        <Router>
            <Header />
            <Switch>
                <Route exact path="/rick-and-morty" component={Home} />
                <Route exact path="/rick-and-morty/characters" component={AllCharacters} />
                <Route path="/rick-and-morty/characters/:id" render={(props) => <Character {...props} key={Date.now()} />} />
            </Switch>
        </Router>
    </>
);

export default App;