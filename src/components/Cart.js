import React, { useContext } from 'react';
import productContext from '../product_context';

function Cart(){

    const { cart } = useContext(productContext);

    const cartlist = cart.map((item, index) => {
        return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{'x'+item.count}</td>
          <td>{<Removebutton item={item}/>}</td>
        </tr>
        )
      })

    if(cart.length > 0){

    return ( 

        <div style={
          {padding:'15px'}
        }>
        <table className='c'>
          
          <tr className='thead'>
            <th>ID</th>
            <th>NAME</th>
            <th>QUANTITY</th>
            <th>ACTIONS</th>
          </tr>
          {cartlist}
        </table>
        </div>
    )
    } else {
        return (
            <span id="empty_cart">
                <h2>cart is empty</h2>
            </span>
            )
    }
};

function Removebutton(props){
    const state = useContext(productContext);
    return(
            <button onClick={()=>state.remove(state.cart.indexOf(props.item))}>
              remove
            </button>
    )
  }

export default Cart;