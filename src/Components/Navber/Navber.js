import React from 'react';
import "../../sass/nav.scss";

const Navber = () => {
    return (
        <div className="navber">
            <a href="/home">Home</a>
            <a href="/about">learn <span>sass</span></a>
            <a href="/sass">advance <span>sass</span></a>
        </div>
    );
};

export default Navber;