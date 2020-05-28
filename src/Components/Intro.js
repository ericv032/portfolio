import React from 'react';

const Intro = ( props ) => (

    <div className="home-intro">
    <section>
        <article>
        <figure className="animated fadeInUp">
        <img className="logo-home" src={require('../../public/images/eric-pic.png')} alt="Logo" />
        </figure>
            <h1 className="animated fadeInUp">{props.introH1}</h1>
            <p className="animated fadeInUp">{props.introP}</p>
            {props.children}
        </article>
    </section>
</div>

);

export default Intro
