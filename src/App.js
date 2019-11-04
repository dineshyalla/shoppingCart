import React, { useContext } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import productContext from './product_context';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  const { cartCount } = useContext(productContext);

  return (
    <div>
      <header className="header">
        <span className="header-buttons">
          <Link to='/'>
                  <button>Products</button>
          </Link>
          <Link to='/cart'>
                  <button>{'cart('+cartCount+')'}</button>
          </Link>
        </span> 
      </header>
        <Switch>
            <Route exact path='/' component={Products}/>
            <Route path='/cart' component={Cart}/>
        </Switch>
    </div>
  );
}

export default App;
