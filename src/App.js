import React, { Component } from 'react';
import { getCharacter } from 'rickmortyapi';

import Card from './components/Card';

export default class App extends Component {
    state = {
        characters: []
    }

    async componentDidMount() {
        try {
            const chars = await getCharacter();
            this.setState({ characters: chars.results });
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return(
            <div className="container">
                {
                    this.state.characters.map(char => {
                        return <Card 
                            key={char.id}
                            name={char.name}
                            image={char.image}
                            status={char.status}
                            specie={char.species}
                            gender={char.gender} />
                    })
                }
            </div>
        );
    }
};