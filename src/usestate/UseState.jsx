import React, { useState } from 'react';

const UseState = () => {
    const [items, setItems] = useState(0);

    const handleButton = () => {
        setItems(items + 1)
    }
    const removeButton = () => {
        setItems(items - 1)
    }
    return (
        <div>
            <h3>Count: {items}</h3>
            <button onClick={handleButton} className='btn btn-warning'>Explore</button>
            <button onClick={removeButton} className='btn btn-error ml-5'>Minas</button>
        </div>
    );
};

export default UseState;