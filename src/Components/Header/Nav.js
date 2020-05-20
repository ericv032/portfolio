import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;