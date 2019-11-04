import React, { useState, useEffect, useContext } from 'react';
import productContext from '../product_context';
import Card from './Card';
import productlist from '../shoppingList';
function Products(){

    const [ Products, setProducts] = useState([]);

    useEffect(() => {
        const productList = productlist;
        setProducts(productList);
    }, [])
    
    const prodlist = Products.map((item, index) => <Card key={index} item={item}/>)

    return ( 
        <ul>
            <div className="row">
                {prodlist}
            </div>
            
        </ul>);
};

export default Products;