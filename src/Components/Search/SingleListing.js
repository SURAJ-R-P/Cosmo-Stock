import React from 'react';
import PropTypes from 'prop-types';
import './SingleListing.css'
import { Link } from 'react-router-dom';

const SingleListing = (props) => {
    console.log(props.singleData);
    return (
        <Link to={'/stock/' + props.singleData["1. symbol"]}>
        <div className='data'>
            <table>
                <tr>
                <th>{
                        props.singleData["1. symbol"]
                    }
                </th>
                <th>
                    {
                        props.singleData["4. region"]
                    }
                </th>
                <th>
                    {
                        props.singleData["7. timezone"]
                    }
                </th>
                </tr>
                <tr>
                    <td>
                        {
                            props.singleData["2. name"]
                        }
                    </td>
                </tr>
                <tr >
                    <td>
                        Type:<br></br>{
                            props.singleData["3. type"]
                        }
                    </td>
                </tr>
                <tr>
                    <td>
                        Currency:<br></br>{
                            props.singleData["8. currency"]
                        }
                    </td>
                </tr>
                <tr>
                    <td>
                        Market Open:<br></br>{
                            props.singleData["5. marketOpen"]
                        }
                    </td>
                </tr>
                <tr>
                    <td>
                        Market Close:<br></br>{
                            props.singleData["6. marketClose"]
                        }
                    </td>
                </tr>
            </table>
                        
        </div>
        </Link>
    );
};

SingleListing.propTypes = {
    
};

export default SingleListing;