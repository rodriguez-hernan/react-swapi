import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import { Link } from 'react-router-dom';
import { getAllCharacters } from '../../../Actions/character_action';

class CharacterList extends Component {
    constructor(props){
        super(props);
        this.props.getAllCharacters();
    }
    
    componentDidMount() {
        console.log("componentDidMount, characters...", this.props.characters)
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
                        {
                            this.props.characters.map( (character, index) => <CharacterItem character={character} key={index}/>)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const CharacterItem = ({character}) => {
    return (
        <tr>
        <td>{character.name}</td>
        <td>{character.birth_year}</td>
        <td>{character.gender}</td>
        </tr>
    )
}

// En mapStateToProps, pasas el state como parametro y mapeas lo que necesites del state a los props de este 
// componente. Asi solo tenes que usar props en el componente.
const mapStateToProps = (state) => {
    console.log("{mapStateToProps}  state", state)
    return { characters: state.character }
} 

// En mapDispatchToProps, pasas el dispatch (que viene del store) y pasas un objeto con las funciones que
// necesitas del action. Al parecer esto mapea las funciones a una prop tambien
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {getAllCharacters}, dispatch );
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);