import React from 'react';
// import PropTypes from 'prop-types';
import './Header.css';

const Header = props => {
    return (
        <>
        <div className='header'>
            <img className='logo' src='./stocktrendspotter_logo.webp' alt='Image'/>
            CosmoStocks
        </div>
        <div></div>
        </>
    );  
};

// Header.propTypes = {
    
// };

export default Header;