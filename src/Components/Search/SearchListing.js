import React from 'react';
import PropTypes from 'prop-types';
import SingleListing from './SingleListing';

const SearchListing = (props) => {
    return (
        <div>
            {
                 (props.serachData && props.serachData.length) ?
                 props.serachData.map((element, index) => {
                     return <SingleListing singleData={element}></SingleListing>
                 }) : "No Search Results!"
            }    
        </div>
    );
};

SearchListing.propTypes = {
    
};

export default SearchListing;