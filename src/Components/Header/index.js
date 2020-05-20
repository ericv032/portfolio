import React, { Component } from 'react';
import Nav from './Nav';
import Button from '../Button';

class Header extends Component {
    render() {
        return(

            <header>
                <i><img className="mobile-btn" src={require('../../../public/images/mobile-nav-btn.svg')} alt="Mobile nav button" /></i>
                <div>
                <figure>
                <img className="logo" src={require('../../../public/images/ev-logo.svg')} alt="Logo" />
                </figure>
                </div>
                <div>
                    <Nav />
                </div>
                <section>
                    <article>
                        <h1>Hey there! I’m Eric Vazquez</h1>
                        <p>I design & develop modern web based user interfaces</p>
                         <Button value="About Me" className="btn-large-blue"/>
                    </article>
                </section>
            </header>
                
        );
    }
}

export default Header