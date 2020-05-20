import React from 'react';

const CardFW = (props) => (
    <div className="row fw">
    <div className="card-text-block fwt">
        <h2>{props.cardHeader}</h2>
        <p>
            <span>{props.descriptor1}</span>
            <span>{props.descriptor2}</span>
            </p>

            {props.children}

    </div>
    <div className="card-header-image">
        <figure className="fw-img">
        <img src={props.imageUri} alt={props.alt} />
        </figure>
    </div>
</div>
);

export default CardFW
