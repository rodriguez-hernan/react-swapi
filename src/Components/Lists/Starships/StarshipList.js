import React, { Component } from 'react';
import axios from 'axios';

class StarshipList extends Component {
    
    state = {
        ships: []
    }

    componentDidMount() {
        axios.get(`https://swapi.co/api/starships/`)
          .then(res => {
            const ships = res.data;
            this.setState({ ships: ships.results });
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
                            <th>Model</th>
                            <th>Manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.ships.map(ship => (
                            <tr key={ship.created}>
                                <td>{ship.name}</td>
                                <td>{ship.model}</td>
                                <td>{ship.manufacturer}</td>
                            </tr>  
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StarshipList;