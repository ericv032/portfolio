import React from 'react';

const CardRight = (props) => (
    <div className="row">
    <div className="card-text-block">
        <h2>{props.cardHeader}</h2>
        <p>
            <span>{props.descriptor1}</span>
            <span>{props.descriptor2}</span>
            </p>

            {props.children}

    </div>
    <div className="card-header-image-right">
        <figure>
        <img className="img-right" src={props.imageUri} alt={props.alt} />
        </figure>
    </div>
</div>
);

export default CardRight
