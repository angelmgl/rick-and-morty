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
                <Route exact path="/" component={Home} />
                <Route exact path="/characters" component={AllCharacters} />
                <Route path="/characters/:id" render={(props) => <Character {...props} key={Date.now()} />} />
            </Switch>
        </Router>
    </>
);

export default App;