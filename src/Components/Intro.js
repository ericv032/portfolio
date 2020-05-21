import React from 'react';

const Intro = ( props ) => (

    <div className="home-intro">
    <section>
        <article>
            <h1 className="animated fadeInUp">{props.introH1}</h1>
            <p className="animated fadeInUp">{props.introP}</p>
            {props.children}
        </article>
    </section>
</div>

);

export default Intro
