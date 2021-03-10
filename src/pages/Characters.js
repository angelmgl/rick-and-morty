import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacter } from 'rickmortyapi';

export default class Character extends Component {
    state = {
        character: {
            episode: [],
            location: { name: '' },
            origin: { name: '' }
        },
        prev: +this.props.match.params.id - 1,
        next: +this.props.match.params.id + 1
    }

    componentDidMount() {
        this.fetchCharacter(+this.props.match.params.id);
    }

    fetchCharacter = async (id) => {
        try {
            const char = await getCharacter(id);
            await this.setState({ character: char });
            //console.log(this.state.character);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { id, name, status, episode, image, gender, origin, location, species } = this.state.character;
        return(
            <div className="character">
                <h2>{name}</h2>
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <table>
                    <tbody>
                        <tr>
                            <th>Number:</th>
                            <td>{id}</td>
                        </tr>
                        <tr>
                            <th>Gender:</th>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <th>Status:</th>
                            <td>{status}</td>
                        </tr>
                        <tr>
                            <th>Specie:</th>
                            <td>{species}</td>
                        </tr>
                        <tr>
                            <th>Aparitions:</th>
                            <td>{episode.length}</td>
                        </tr>
                        <tr>
                            <th>Origin:</th>
                            <td>{origin.name}</td>
                        </tr>
                        <tr>
                            <th>Last location:</th>
                            <td>{location.name}</td>
                        </tr>
                    </tbody>
                </table>

                {
                    this.state.prev === 0 ?
                    <button className="nav-btn" disabled>Previous</button> :
                    <Link to={`/rick-and-morty/characters/${this.state.prev}`}>
                        <button className="nav-btn">Previous</button>
                    </Link>
                }

                {  
                    this.state.next === 672 ?
                    <button className="nav-btn" disabled>Next</button> :
                    <Link to={`/rick-and-morty/characters/${this.state.next}`}>
                        <button className="nav-btn">Next</button>
                    </Link>
                }

            </div>
        )
    }
};