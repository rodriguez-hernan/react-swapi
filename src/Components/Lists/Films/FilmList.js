import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getFilms } from '../../../Actions/film_action';

class FilmList extends Component {
    
    constructor(props){
        super(props);
        this.props.getFilms();
        console.log(this.props.films);
    }
    
    componentDidMount() {
        console.log(this.props.films);
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
                        {
                            this.props.films.map( (film, index) => <FilmItem film={film} key={index}/>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const FilmItem = ({film}) => {
    return (
        <tr>
        <td>{film.title}</td>
        <td>{film.director}</td>
        <td>{film.release_date}</td>
        </tr>
    )
}

// En mapStateToProps, pasas el state como parametro y mapeas lo que necesites del state a los props de este 
// componente. Asi solo tenes que usar props en el componente.
const mapStateToProps = (state) => {
    console.log("state", state.films)
    return { films: state.films }
} 

// En mapDispatchToProps, pasas el dispatch (que viene del store) y pasas un objeto con las funciones que
// necesitas del action. Al parecer esto mapea las funciones a una prop tambien
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {getFilms}, dispatch );
}

export default  connect(mapStateToProps, mapDispatchToProps)(FilmList);