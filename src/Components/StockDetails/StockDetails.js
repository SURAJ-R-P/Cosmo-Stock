import React from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import StockOverview from './StockOverview';
import StockTimeData from './StockTimeData';

const StockDetails = () => {
    const params = useParams ();
    console.log(params.symbol);
    return (
        <div>
            <StockOverview symbol={params.symbol}></StockOverview>
            <StockTimeData symbol={params.symbol}></StockTimeData>
        </div>
    );
};

StockDetails.propTypes = {
    
};

export default StockDetails;