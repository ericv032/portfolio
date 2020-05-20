import React, { Component } from 'react';
import Nav from './Header/Nav';

class Footer extends Component {
    render() {
        return (

                    <footer>
                    <Nav />
                    <ul>
                        <li><a href="#"><img className="logo" src={require('../../public/images/gh-icon.svg')} alt="Github icon" /></a></li>
                        <li><a href="#"><img className="logo" src={require('../../public/images/linkedin-icon.svg')} alt="LinkedIn icon" /></a></li>
                    </ul>
                    </footer>                    

        )
    }
}

export default Footer
