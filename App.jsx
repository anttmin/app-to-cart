import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";



function App(){
 const [products, setProducts] = useState([]);

    useEffect(() => {
       getProducts(); 
    },[]);

    const getProducts = async () =>{
        const response = await fetch ('https://fakestoreapi.com/products');
        const products = await response.json();

        setProducts(products)

    }
    
    return(
        <>
          {
            products.map((product)=>(
               <ProductCard key={product.id} product={product} />
            ))
          }
        </>
    )
}
export default App