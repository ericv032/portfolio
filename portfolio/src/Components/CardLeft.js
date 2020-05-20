import React from 'react';

const CardLeft = (props) => (
    <div className="row">
    <div className="card-header-image">
        <figure>
        <img className="img-left" src={props.imageUri} alt={props.alt} />
        </figure>
    </div>
    <div className="card-text-block">
        <h2>{props.cardHeader}</h2>
        <p>
            <span>{props.descriptor1}</span>
            <span>{props.descriptor2}</span>
            </p>

            {props.children}

    </div>
</div>
);

export default CardLeft
