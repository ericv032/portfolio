import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <Link to="/">
                        <li><a href="#">Home</a></li>
                        </Link>
                        <Link to="/about">
                        <li><a href="#">About</a></li>
                        </Link>
                        <Link to="mailto:ericvazquez032@gmail.com">
                        <li><a href="#">Contact</a></li>
                        </Link>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;