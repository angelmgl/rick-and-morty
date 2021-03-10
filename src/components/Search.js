import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getCharacter } from 'rickmortyapi';

import Thumbnail from './Thumbnail';

export default class Search extends Component {
    state = {
        keyword: '',
        results: [],
        error: ''
    }

    fetchResults = async (keyword) => {
        try {
            const res = await getCharacter({ name: keyword });
            const error = await res.error ? 'No results found' : '';
            const results = await res.results ? res.results.slice(0,6) : [];

            this.setState({ results, error });

            console.log(this.state.results);
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        if(e.target.value.length > 3) {
            this.fetchResults(e.target.value);
        } else {
            this.setState({ error: '', results: [] });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const url = this.state.results.length > 0 ?
            this.state.results[0].id : null

        if(url) window.location.href = `/rick-and-morty/characters/${url}`;
    }

    render() {
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <label htmlFor="search">Search a character by name:</label>
                <input type="search" id="search" placeholder="e.g. Rick Sanchez" onChange={this.handleChange} />
                <button type="submit">
                    <FaSearch />
                </button>
                
                <div className="results">
                    {
                        this.state.results.length > 0 ?
                        (this.state.results.map(res => <Thumbnail key={res.id} charId={res.id} name={res.name} img={res.image} />))
                        : (<div className="error">{this.state.error}</div>)
                    }
                </div>

            </form>
        )
    }
}