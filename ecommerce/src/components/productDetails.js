import react,{useState,useEffect} from 'react'

const ProductDetails = ()=> {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProducts] = useState({});
    useEffect(()=> {
        
        fetch("http://localhost:9000/getproducts")
            .then(res => res.text())
            .then(res => setProducts(JSON.parse(res)));
        if(localStorage.getItem('selectedProduct') !== null) {
            // console.log(JSON.parse(localStorage.getItem('selectedProduct')))
            // setSelectedProducts(localStorage.getItem('selectedProduct'))
        }
    },[])

    const addToCart = (product) => {
        // localStorage.setItem('selectedProduct',product);
        console.log(product)
        setSelectedProducts(product)
    }
    return (
        <>
            <h1>Product Details</h1>
            <table className='table table-striped table-bordered'>
                <tr>
                    <th>No</th>
                    <th>Item Name</th>
                    <th>Item Price</th>
                    <th>Color</th>
                    <th>Action</th>
                </tr>
                
                    
                   { products.map((product,index)=>{
                       return <tr>
                           <td>{index}</td>
                           <td>{product.name}</td>
                           <td>{product.price}</td>
                           <td>{product.color}</td>
                           <td><button onClick={()=>addToCart(product)} style={{'color':'black','backgound-color':'blue !important'}} className='btn btn-primary'>Add to cart</button></td>
                           </tr>
                    })
                }
                
            </table>

            {Object.keys(selectedProduct).length !== 0  ? 
            <div>
                <h3>Selected Item</h3>
                <p>Name : {selectedProduct.name}</p>
                <p>price : {selectedProduct.price}</p>
                <p>color : {selectedProduct.color}</p>

            </div> : ''}
            
        </>
    )
}

export default ProductDetails;