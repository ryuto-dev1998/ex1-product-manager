import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const apiURL = import.meta.env.VITE_API_URL

const CreatePage = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    function handleCreate(e) {
        e.preventDefault()
        const product = { 'name': name, 'price': price, 'description': description }
        axios.post(apiURL, product)
            .then(() => alert("Add successfully"))
            .then(() => navigate('/admin'))
            .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <h2>Add New Product</h2>
            <form onSubmit={handleCreate} style={{ maxWidth: "500px", margin: "auto" }}>
                <label className="form-label">Name</label><br />
                <input type="text" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label className="form-label">Price</label><br />
                <input type="number" name="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                <label className="form-label">Description</label><br />
                <textarea rows={3} type="text" name="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
                <div className="d-flex justify-content-center">
                    <Link to='/admin' className='btn btn-secondary m-2'>Back</Link>
                    <button type="submit" className="btn btn-primary m-2">Add Product</button>
                </div>

            </form>

        </div>
    )
}
export default CreatePage