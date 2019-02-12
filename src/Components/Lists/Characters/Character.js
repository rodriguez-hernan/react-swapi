import React, { Component } from 'react';
import axios from 'axios';

class Character extends Component {

    state = {
        id: this.props.match.params.id,
        character: {},
        planet: {}
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/people/${this.state.id}/`)
          .then(res => {
            const character = res.data;
            this.setState({ character });
            axios.get(`${character.homeworld}`)
                .then(res => {
                    const planet = res.data;
                    console.log(planet)
                    this.setState({ planet: planet });
                    console.log(this.state)
                })
            
        })
    }

    getHomePlanet = () => {

    }

    render() {
        return (
            <div className="list">
                <h2>{this.state.character.name}</h2>
                <ul>
                    <li>Birth year: {this.state.character.birth_year}</li>
                    <li>Gender: {this.state.character.gender}</li>
                    <li>Height: {this.state.character.height}</li>
                    <li>Hair color: {this.state.character.hair_color}</li>
                    <li>Home planet: {this.state.planet.name}</li>
                </ul>
            </div>
        );
    }
}

export default Character;