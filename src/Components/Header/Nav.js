import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <Link to="/">
                        <li><a>Home</a></li>
                        </Link>
                        <Link to="/about">
                        <li><a>About</a></li>
                        </Link>
                        <li><a href={`mailto:ericvazquez032@gmail.com`} target="new">Contact</a></li> 
                    </ul>
                    
                </nav>
            </div>
        )
    }
}

export default Nav;