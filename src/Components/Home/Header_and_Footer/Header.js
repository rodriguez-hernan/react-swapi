import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style= {{
                    backgroundColor:'#c6c5c4',
                    boxShadow:'none',
                    padding:'10px 0',
                    borderBottom:'2px solid #000000'
                }}
            >
                <Toolbar>
                    <Link to="/"> 
                        <h1 className="header-logo">StarWars</h1>
                    </Link>
                    <div className="header_links">
                        <Link to="/characters"> 
                            <Button color="inherit">Characters</Button>
                        </Link>
                        <Link to="/films"> 
                            <Button color="inherit">Films</Button>
                        </Link>
                        <Link to="/starships"> 
                            <Button color="inherit">Star Ships</Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;