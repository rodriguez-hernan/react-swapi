import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CHARACTERS_API } from '../../../config';
import { addCharId } from '../../../Utilities/misc';

import axios from 'axios';

class CharacterList extends Component {
    state = {
        characters: []
    }
    
    componentDidMount() {
        axios.get(CHARACTERS_API)
          .then(res => {
            const characters = res.data;
            this.setState({ characters: addCharId(characters.results) });
            console.log(this.state)
        })
    }

    render() {
        return (
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth year</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.characters.map(person => (
                            <tr key={person.id}>
                                <td>
                                <Link to={`/characters/${person.id}`}>{person.name}</Link>
                                </td>
                                <td>{person.birth_year}</td>
                                <td>{person.gender}</td>
                            </tr>  
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CharacterList;