import React, { useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState('');

    const handleAddProduct = () => {
        if (newProduct.trim() !== '') {
            setProducts([...products, newProduct]);
            setNewProduct('');
        }
    };

    return (
        <div className='my-8'>
            <h1 className='text-3xl mb-4 font-bold'>Product List</h1>
            <div>
                <input className='bg-gray-300 pl-4 rounded p-3'
                    type="text"
                    placeholder="Enter product name"
                    value={newProduct}
                    onChange={(e) => setNewProduct(e.target.value)}
                />
                <button onClick={handleAddProduct} className='btn btn-success ml-6'>Add Product</button>
            </div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
