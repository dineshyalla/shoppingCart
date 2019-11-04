import React, { useContext } from 'react';
import productContext from '../product_context';

function Button(props){

    const state = useContext(productContext);
    if(props.disabled){
      return (
        <button id="disabled_button" >OUT OF STOCK</button>
      )
    } else {
      return(
        <button onClick={() => {
            state.add(props.item);
            props.setCount(props.item);
        }} disabled={props.disabled}>
          add to cart
        </button>    
)
    }
}

export default Button;