import React from 'react';
import Children from './Children';

const Prants = ({ value, setValue }) => {

    const handleButton = () => {
        setValue(value + 1)
    }

    return (
        <div>
            <h3>Prants: {value} </h3>
            <button onClick={handleButton} className='btn btn-secondary '>Add</button>
            <Children value={value}></Children>
        </div>
    );
};

export default Prants;