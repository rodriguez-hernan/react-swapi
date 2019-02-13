import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getJedis } from '../../../Actions/actions';

class StarshipList extends Component {
    
    constructor(props){
        super(props);
        this.props.getJedis();
    }

    componentDidMount(){
        console.log(this.props);
        
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
                        { this.props.ships.map(ship => (
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

// En mapStateToProps, pasas el state como parametro y mapeas lo que necesites del state a los props de este 
// componente. Asi solo tenes que usar props en el componente.
const mapStateToProps = (state) => {
    console.log("state", state)
    return { ships: state.ships }
} 

// En mapDispatchToProps, pasas el dispatch (que viene del store) y pasas un objeto con las funciones que
// necesitas del action. Al parecer esto mapea las funciones a una prop tambien
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {getJedis}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList);