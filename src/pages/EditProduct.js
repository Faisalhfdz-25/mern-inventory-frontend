import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditProduct = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        getProductById()
    }, []);
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`)
        setName(response.data.name)
        setPrice(response.data.price)
    }
    const editProduct = async (e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, {
                name,
                price
            })
            navigate('/products')
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='columns mt-5 is-centered'>
        <div className="column is-half">
            <form onSubmit={editProduct}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input type="text" className="input" placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-success">Update</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditProduct