import React, {useEffect, useState} from 'react';
import props from 'prop-types';
import axios from 'axios';
import './StockOverview.css';

const StockOverview =(props) => {
    const [stock, setstock]= useState();

    useEffect(()=> 
    {
        let url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${props.symbol}&apikey=2G07X4Z3BBIN1YUE`;
        axios.get(url)
        .then(
            response => {
                console.log("Stock Overview data");
                console.log(response.data);
                setstock({...response.data})
            }
        ).catch(error=>console.log(error))

    }, [props.symbol]);
    return (
        <div className='stockoverview'>
            {
                stock ?
                Object.keys(stock).map((ele, index)=>{
                    return <div>
                        <div>{ele}</div>
                        <div>{stock[ele]}</div>
                        </div>

                }) : "No data found!"
            }

        </div>
    );
};


export default StockOverview;