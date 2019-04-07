import React, { Component } from 'react';
import ProductsList from './components/productList/ProductsList';
import './App.css';
import ProductDetails from './components/productDetails/ProductDetails';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/productDetails/:id" component={ProductDetails} />
          }
        </div>
     </Router>
    );
  }
}

export default App;
