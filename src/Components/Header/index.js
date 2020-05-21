import React, { Component } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(

            <header>
                <i><img className="mobile-btn" src={require('../../../public/images/mobile-nav-btn.svg')} alt="Mobile nav button" /></i>
                <div>
                <figure>
                <Link to="/">
                <img className="logo" src={require('../../../public/images/ev-logo.svg')} alt="Logo" />
                </Link>
                </figure>
                </div>
                <div>
                    <Nav />
                </div>
        
            </header>
                
        );
    }
}

export default Header