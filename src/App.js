import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <header className="header">
        <span className="header-buttons">
          <Link to='/'>
                  <button>Products</button>
          </Link>
          <Link to='/cart'>
                  <button>Cart</button>
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
