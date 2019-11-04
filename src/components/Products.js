import React, { useState, useEffect, useContext } from 'react';
import productContext from '../product_context';
import Card from './Card';
import productlist from '../shoppingList';

function Products(){

    const { products } = useContext(productContext);
   
    // const [ Products, setProducts] = useState([]);

    console.log("products", products);
    // useEffect(() => {
    //     const productList = products;
    //     setProducts(productList);
    // }, [])

    const prodlist = products.map((item, index) => <Card key={index} item={item}/>)

    return ( 
        <ul>
            <div className="row">
                {prodlist}
            </div>
            
        </ul>);
};

export default Products;