import React, { useState, useEffect } from 'react';
import productContext from './product_context';

function Store({children}){

     // the app's initial state
     const initialState = { 
        cart:[],
        cartCount:0,
        add: add,
        remove: remove
        }
  
    //initiate app state with initialstates
    const [ appstate, setState ] = useState(initialState);

    // function to add product to the cart
    function add(prod){
        let newList = appstate.cart;

        const newItem = {
            count:prod.count,
            id:prod.id,
            name:prod.name
        }

        const filteredList = newList.filter(index =>{
            return index.id === prod.id;
        });

        if(filteredList.length > 0){
            const pos = newList.map(index => { return index.id; }).indexOf(prod.id);
            newList[pos].count += 1;
        } else{
            newList.push(newItem);
        }
        let cnt = getCartCount();
        setState({...appstate, cart:newList, cartCount: cnt});
    }

    // function to get the number of products in cart
    function getCartCount(){
        let count = 0;
        if(appstate.cart.length > 0){
          appstate.cart.forEach(item => {
            count += item.count;
          });      
        }

        return count;
    }

    function remove(index){

        const cartList = appstate.cart;
        cartList.splice(index,1);
    
        setState({...appstate, cart:cartList, cartCount:getCartCount()});
    }


    return(
        <productContext.Provider value={appstate}>
          {children}
        </productContext.Provider>
      )
}
export default Store;
