import{useEffect,useState} from 'react' 
import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

const ProductCard=({product})=>{
    return(
        <div className='container'>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

const ProductList=()=>{
    const [products,setProducts] = useState([])
    useEffect(()=>{
        axios.get(apiURL)
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    })
    return(
        <div className='container m-4'>
            <h2>Product List</h2>
            <div>
                {products.map(p=><ProductCard key={p._id} product={p}/>)}
            </div>
        </div>
    )
}

export default ProductList