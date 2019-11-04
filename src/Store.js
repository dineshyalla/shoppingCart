import React, { useState, useEffect } from 'react';
import productContext from './product_context';

function Store({children}){

     // the app's initial state
     const initialState = { 
        cart:[],
        cartCount:0
        }
  
    //initiate app state with initialstates
    const [ appstate, setState ] = useState(initialState);

    return(
        <productContext.Provider value={appstate}>
          {children}
        </productContext.Provider>
      )
}
export default Store;
