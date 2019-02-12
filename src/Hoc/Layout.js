import React from 'react';
import Header from '../Components/Home/Header_and_Footer/Header';

const Layout = (props) => {
    return (
        <div>
            <Header />
                {props.children}
            <footer></footer>
        </div>
    );
};

export default Layout;