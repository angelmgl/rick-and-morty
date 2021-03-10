import React, { Component } from 'react';
import { getCharacter } from 'rickmortyapi';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from '../components/Card';
import Loader from '../components/Loader';

export default class AllCharacters extends Component {
    state = {
        characters: [],
        loading: true,
        page: 1,
        hasMore: true
    }

    fetchCharacters = async (page) => {
        try {
            if(page < 35) {
                const chars = await getCharacter({ page });
                this.setState({
                    ...this.state,
                    loading: false,
                    characters: [].concat(this.state.characters, chars.results),
                    page: this.state.page + 1
                });
            } else {
                this.setState({ hasMore: false });
            }
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
                <div className="info"><strong>Status:</strong> <span></span> Alive <span></span> Dead <span></span> unknown</div>
                <InfiniteScroll
                    dataLength={this.state.characters.length}
                    next={() => this.fetchCharacters(this.state.page)}
                    hasMore={this.state.hasMore}
                    loader={<Loader />}
                    endMessage={<h2 style={{ textAlign: 'center', backgroundColor: 'rgba(255,255,255,0.8)',
                                margin: '0', padding: '5px' }}>
                                    You have reached the end!
                                </h2>} >
                {
                    <section className="container">
                        { this.state.characters.map(char => {
                            return <Card 
                                key={char.id}
                                id={char.id}
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
}