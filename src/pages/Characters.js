import React, { Component } from 'react';
import { getCharacter } from 'rickmortyapi';

export default class Character extends Component {
    state = {
        character: {
            episode: [],
            location: { name: '' },
            origin: { name: '' }
        }
    }

    componentDidMount() {
        this.fetchCharacter(+this.props.match.params.id);
    }

    fetchCharacter = async (id) => {
        const char = await getCharacter(id);
        await this.setState({ character: char });
        console.log(this.state.character);
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
            </div>
        )
    }
};