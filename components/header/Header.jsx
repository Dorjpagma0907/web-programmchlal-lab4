import React from 'react';
import './Header.css';


class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div id="header-container">
                <img className='header-logo' src='./components/header/1.jpg'/>
                <div className='header-text' >Web Programming Lab04</div>
            </div>
        )
    }
}
export default Header;