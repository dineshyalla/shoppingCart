import React, { useContext } from 'react';
import productContext from '../product_context';

function Button(props){

    const state = useContext(productContext);
    return(
            <button onClick={() => {
                state.add(props.item)
            }}>
              add to cart
            </button>    
    )
}

export default Button;