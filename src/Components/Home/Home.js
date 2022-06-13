import React from 'react';
import Search from '../Search/Search';
// import PropTypes from 'prop-types';
import './Home.css'

const Home = () => {
    return (
        <div className='body'>
            <div className='intro'>
                <img className='intro_logo' src='./stocktrendspotter_logo.webp' alt='Image'/>
                <h1>CosmoStocks</h1>
                <h2>Bringing the world of stocks to your universe!</h2>
                <p>CosmoStocks brings the universe of stocks to your pocket. Browse through IPOs or keep them in a single watchlist.</p>
            </div>
            <div className='watchlist'>
                <div>
                <strong>Watchlist</strong>
                <p>
                The world of finance is volatile. Every few seconds could see a major change in every stock's fate.<br></br>
                CosmoStocks, powered by Alpha Vantage, helps you search your favorite stocks and keep an eye out on<br></br>
                its minute changes. Find your favorite stock by entering its symbol or a character in the input box<br></br>
                below:
                </p>
                <Search></Search>
                </div>
                <div className='topstocks'>
                    <strong >Top stocks this week</strong>
                </div> 
            </div>
        </div>
    );
};

// Home.propTypes = {
    
// };

export default Home;