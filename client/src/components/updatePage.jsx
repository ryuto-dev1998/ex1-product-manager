import { useState,useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const apiURL = import.meta.env.VITE_API_URL;
const  UpdatePage=()=>{
    const [product,setProduct] = useState([]);
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const {id} =useParams()

    useEffect(()=>{
        axios.get(`${apiURL}/${id}`)
        .then(res=>{setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err=>console.log(err))
    },[])
    function handleUpdate(e){
        e.preventDefault()
         const newProduct = { 'name': name, 'price': price, 'description': description }
        axios.put(`${apiURL}/${id}`,newProduct)
        .then(()=>{alert("Update successfunnly")
            navigate('/admin')
        })
        .catch(err=>console.log(err))
    }

     return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={handleUpdate}>
                <label>Name</label><br />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
                <label>Price</label><br />
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
                <label>Description</label><br />
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
                <button type="submit">Update Product</button>
            </form>

        </div>
    )
}
export default UpdatePage