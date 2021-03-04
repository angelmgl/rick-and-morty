import React, { Component } from 'react';
import { getCharacter } from 'rickmortyapi';
import { FaBars } from 'react-icons/fa';

import Header from "./components/Header";
import Card from './components/Card';
import Loader from './components/Loader';

export default class App extends Component {
    state = {
        characters: [],
        loading: true,
        page: 1
    }

    fetchCharacters = async (page) => {
        try {
            const chars = await getCharacter({ page });
            this.setState({
                ...this.state,
                loading: false,
                characters: [].concat(this.state.characters, chars.results),
                page: this.state.page + 1
            });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.fetchCharacters(this.state.page);
    }

    render() {
        return(
            <>
                <Header />
                <section className="container">
                    {
                        this.state.characters.length > 0 ?
                        (this.state.characters.map(char => {
                            return <Card 
                                key={char.id}
                                name={char.name}
                                image={char.image}
                                status={char.status}
                                specie={char.species}
                                gender={char.gender} />
                        })) : <Loader />
                    }
                    {
                        this.state.loading ? "" :
                        (<button className="loadMore" 
                        onClick={() => this.fetchCharacters(this.state.page)}>
                        Load more...
                        </button>)
                    }  
                </section>
                <FaBars className="bars" /></>
        );
    }
};