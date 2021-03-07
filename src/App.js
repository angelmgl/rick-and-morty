import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import AllCharacters from './pages/AllCharacters';
import Character from './pages/Characters';

import './style.css';
import './normalize.css';

const App = () => (
    <>
        <Header />
        
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/characters" exact component={AllCharacters} />
                <Route path="/characters/:id" component={Character} />
            </Switch>
        </Router>
    </>
);

const Home = (props) => (
    <div>Home</div>
);

export default App;