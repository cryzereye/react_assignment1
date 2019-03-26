import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className = 'output'>
            <p>{props.username}</p>
        </div>
    )
}

export default useroutput;