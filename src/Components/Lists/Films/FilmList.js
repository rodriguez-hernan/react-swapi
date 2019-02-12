import React, { Component } from 'react';
import axios from 'axios';

class FilmList extends Component {
    
    state = {
        films: []
    }
    
    componentDidMount() {
        axios.get(`https://swapi.co/api/films/`)
          .then(res => {
            const films = res.data;
            this.setState({ films: films.results });
            console.log(this.state)
        })
    }
    
    render() {
        return (
            <div className="list">
                <table>
                    <thead>
                        <tr>
                            <th>Film Name</th>
                            <th>Director</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.films.map(film => (
                            <tr key={film.episode_id}>
                                <td>{film.title}</td>
                                <td>{film.director}</td>
                                <td>{film.release_date}</td>
                            </tr>  
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FilmList;