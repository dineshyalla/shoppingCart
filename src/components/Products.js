import React, { useState, useEffect, useContext } from 'react';
import productContext from '../product_context';

function Products(){

    const [ Products, setProducts] = useState([]);

    useEffect(() => {
        const productList = [
            {name:'book', id:1}, {name:'laptop', id:2}, {name:'game console', id:3}, {name:'radio', id:4}, {name:'notenook', id:56}
        ]
        setProducts(productList);
    }, [])

    const prodlist = Products.map((item,index) => {
        return <li key={index}>id:{item.id} | product name: <strong>{item.name}</strong>  <Addbutton item={item}/></li>
      })

    return ( 
        <ul>
            {prodlist}
        </ul>);
};

function Addbutton(props){

    const state = useContext(productContext);
    return(
            <button onClick={() => {
                state.add(props.item)
            }}>
              add to cart
            </button>    
    )
  }


export default Products;