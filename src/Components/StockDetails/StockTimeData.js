import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const StockTimeData = (props) => {
    const [stockTime, setstockTime]= useState();

    useEffect(()=> 
    {
        let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=${props.symbol}&interval=60min&apikey=2G07X4Z3BBIN1YUE`;
        axios.get(url)
        .then(
            response => {
                console.log("Stock Overview data");
                console.log(response.data);
                setstockTime({...response.data})
            }
        ).catch(error=>console.log(error))

    }, [props.symbol]);
    return (
        <div>
            {
                (stockTime && stockTime["Time Series (60min)"]) ?
                <table>
                    <tr>
                        <td>Open</td>
                        <td>High</td>
                        <td>Low</td>
                        <td>Close</td>
                        <td>Volume</td>
                    </tr>
                    {
                        Object.keys(stockTime["Time Series (60min)"]).map((ele, index) =>{
                            return 
                            <>
                            <tr>
                                <td colSpan={5}>ele</td>
                            </tr>
                            <tr>
                                <td>{stockTime["Time Series (60min)"][ele]["1. open"]}</td>
                                <td>{stockTime["Time Series (60min)"][ele]["2. high"]}</td>
                                <td>{stockTime["Time Series (60min)"][ele]["3. low"]}</td>
                                <td>{stockTime["Time Series (60min)"][ele]["4. close"]}</td>
                                <td>{stockTime["Time Series (60min)"][ele]["5. volume"]}</td>
                            </tr>
                            </>
                        })
                    }
                </table>
                :"Loading!"
            }
        </div>
    );
};

StockTimeData.propTypes = {
    
};

export default StockTimeData;