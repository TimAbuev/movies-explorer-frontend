import React from 'react'
import './Preloader.css'

const Preloader = (props) => {
    const {
        isShown,
    } = props;
    return (
        <div className={`preloader ${isShown ? '' : 'preloader__invisible'}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
