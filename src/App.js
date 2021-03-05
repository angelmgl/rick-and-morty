import React, { Component } from 'react';
import { getCharacter } from 'rickmortyapi';
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from './components/Header';
import Card from './components/Card';
import Loader from './components/Loader';

import './style.css';
import './normalize.css';

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
                <InfiniteScroll
                    dataLength={this.state.characters.length}
                    next={() => this.fetchCharacters(this.state.page)}
                    hasMore={true} 
                    loader={<Loader />} >
                {
                    <section className="container">
                        { this.state.characters.map(char => {
                            return <Card 
                                key={char.id}
                                name={char.name}
                                image={char.image}
                                status={char.status}
                                specie={char.species}
                                gender={char.gender} />
                        })}
                    </section>
                } 
                </InfiniteScroll>
            </>
        );
    }
};