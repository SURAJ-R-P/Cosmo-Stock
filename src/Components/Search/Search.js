import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css'
import SearchListing from './SearchListing';
import axios from 'axios';

const Search = () => {
    const [keyword, setKeyword] = useState("");
    const [serachData, setSearchData] = useState([]);
    const keypress = (event) => {
        if(event.key == "Enter")
        {
            console.log("Enter key pressed");
            console.log(keyword);
            axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=2G07X4Z3BBIN1YUE`)
            .then(res => { console.log(res); 
                if (res.data && res.data.bestMatches)
                {
                    setSearchData([...res.data.bestMatches]);
                }
            })
            .catch(error => console.log(error));
        }
    }
    return (
        <div>
            <div>
                <input className='input_text' onKeyUp={keypress} onChange={(e)=>setKeyword(e.target.value)} type="text"  placeholder="Search stocks using its symbol name by entering characters here..."/>
                <img className='search_logo' src='./search.jpg' alt='serach' />
            </div>
            <SearchListing serachData={serachData}></SearchListing>
        </div>
    );
};

Search.propTypes = {
    
};

export default Search;