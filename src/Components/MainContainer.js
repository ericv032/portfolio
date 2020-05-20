import React from 'react';

const MainContainer = (props) => (

    <div className="main-container">
        <main>
        {props.children}
        </main>
    </div>

);

export default MainContainer;