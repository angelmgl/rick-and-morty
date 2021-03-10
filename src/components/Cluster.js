import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cluster extends Component {

    random = () => Math.floor((Math.random() * 672) + 1);

    clickTo = (e) => {
        if(e.target.id === 'all') {
            document.getElementById('clickToAll').click();
        } else if(e.target.id === 'random') {
            document.getElementById('clickToRandom').click();
        }
    }

    render() {
        return(
            <>
                <div className="options">
                    <div className="option" id="all" onClick={this.clickTo}>
                        <p>I want to see ALL the characters! I'm a super fan!</p>
                    </div>
                    <div className="option" id="random" onClick={this.clickTo}>
                        <p>I don't have time, show me something quick, anyone.</p>
                    </div>
                </div>

                <Link to="/rick-and-morty/characters" id="clickToAll"
                style={{ display: 'none' }}>all</Link>
                <Link to={`/rick-and-morty/characters/${this.random()}`} id="clickToRandom"
                style={{ display: 'none' }}>random</Link>
            </>
        )
    }
}