import React, { useContext } from 'react';

function Cart(){
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

        </table>
        </div>
    )
};

export default Cart;