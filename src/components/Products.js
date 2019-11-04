import React, { useState, useEffect, useContext } from 'react';

function Products(){

    const [ Products, setProducts] = useState([]);

    useEffect(() => {
        const productList = [
            {name:'book', id:1}, {name:'laptop', id:2}, {name:'game console', id:3}, {name:'radio', id:4}, {name:'notenook', id:56}
        ]
        setProducts(productList);
    }, [])

    const prodlist = Products.map((i,index) => {
        return <li key={index}>id:{i.id} | product name: <strong>{i.name}</strong>  <Addbutton pd={i}/></li>
      })

    return ( 
        <ul>
            {prodlist}
        </ul>);
};

function Addbutton(props){

    return(
            <button>
              add to cart
            </button>    
    )
  }


export default Products;