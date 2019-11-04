import React, { useContext } from 'react';
import Addbutton from './Button';

function Card(props){
    return (
            <div className="column">
                <div className="card">
                <img src={props.item.img}/>
                <p>{props.item.name}</p>
                <p><strong>Price</strong>: {props.item.price}</p>
                <Addbutton item={props.item}/>
                </div>
            </div>

          /* <p className="date">March 20 2015</p>
          
          <h2>{props.item.name}</h2>
          
          <p className="body-content">{props.item.name}</p>
       
          <Button />  */
        
      )
}

export default Card;