import React, { useState } from 'react';
import Prants from './Prants';

const GrandParents = () => {

    const [value, setValue] = useState(0);

    return (
        <div>
            <h3>Grand Prants {value}</h3>
            <Prants value={value} setValue={setValue}></Prants>
        </div>
    );
};

export default GrandParents;