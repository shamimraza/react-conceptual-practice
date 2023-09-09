import React, { useState } from 'react';

const UseState1 = () => {


    const arrayOfObjectsWithId = [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Alice", age: 25 },
        { id: 3, name: "Bob", age: 35 },
        { id: 4, name: "Eve", age: 28 },
        { id: 5, name: "Rena", age: 38 },
        { id: 6, name: "kean", age: 68 }
    ];

    const [array, setArray] = useState(arrayOfObjectsWithId)

    const handleRemove = () => {
        setArray([])
    }

    const singleButton = (id) => {
        console.log(id);
        const singleRemove = array.filter(array => array.id !== id)
        setArray(singleRemove)
    }

    return (
        <div>
            {
                array &&
                array?.map((item, index) => <div key={index} className='my-3'>
                    <h1>{item.name}</h1>
                    <p>{item.id}</p>
                    <button onClick={() => singleButton(item.id)} className='btn btn-success'>Remove</button>
                </div>)
            }
            <button onClick={handleRemove} className='btn btn-accent mt-6'>All Remove</button>
        </div>
    );
};

export default UseState1;