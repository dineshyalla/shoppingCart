import React, { useContext, useState, useEffect } from 'react';
import Addbutton from './Button';
import productContext from '../product_context';

function Card(props){

    const obj = {
        countx: 0,
        maxQty: props.item.qty,
        disabled: false
    }
  
    const [state, setState] = useState(obj);
    
    const [ item, setItem] = useState(props.item);
    let cnt;

    const modifyQty = (value) => {
        cnt = value;
        setItem({...item, count: parseInt(cnt, 10)});
        setState({...state, countx: cnt});
    }

    const modifyCnt = (item) => {

        let tempQty = state.maxQty - item.count;
        if(tempQty<1){
            setState({...state, countx: 0, maxQty: tempQty, disabled: true}); 
        } else {
            setState({...state, countx: 0, maxQty: tempQty});
        }

    }
    return (
            <div className="column">
                <div className="card">
                <img src={props.item.img}/>
                <p>{props.item.name}</p>
                <p><strong>Price</strong>: {props.item.price}</p>
                Qty: <input type="number" min={0} max={state.maxQty} value={state.countx} onChange={(e) => modifyQty(e.currentTarget.value)}/>
                <Addbutton item={item} setCount={(item) => modifyCnt(item)} disabled={state.disabled}/>
                </div>
            </div>
        
      )
}

export default Card;