import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const apiURL = import.meta.env.VITE_API_URL

const AdminPage = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get(apiURL)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    function handleDelete(id) {
        axios.delete(`${apiURL}/${id}`)
            .then(() => {
                alert("Delete successfully")
                setProducts(products.filter(p => p._id != id))
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container'>
            <h2>Admin panel</h2>
            <div className='d-flex justify-content-end m-4'>
                <Link to='/admin/add' className='btn btn-primary'>+ add</Link>
            </div>

            <table className='table text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p =>
                        <tr key={p._id}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>
                                <Link to={`/admin/update/${p._id} `} className='btn btn-primary me-4'>Edit</Link>
                                <button onClick={() => handleDelete(p._id)}className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default AdminPage