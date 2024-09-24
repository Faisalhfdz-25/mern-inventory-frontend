import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProducts(response.data);
    }
    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            getProducts();
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div className='columns mt-5 is-centered'>
        <div className="column is-three-quarters">
            <Link to="/add-product" className="button is-success">Add New</Link>
            <table className='table is-fullwidth is-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>Rp {product.price.toLocaleString('id-ID')}</td>
                            <td>
                                <Link to={`/edit-product/${product.id}`} className="button is-small is-info mr-2">Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductList