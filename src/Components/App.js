import React from 'react';
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  
  Route,
  Switch,
} from 'react-router-dom';
import Products from './Products';
import Add_Products from './Add_Products';
import Cart from './Cart';
import APIUrls from '../helper/APIUrls';
import { connect } from 'react-redux';
import {setProducts} from '../actions/ProductsAction'
import ProductPage from './ProductPage';
/**
 * Create Router and display views according to routes
 */
class App extends React.Component{
  componentDidMount(){
    fetch(APIUrls.add_products)
      .then(response=>response.json())
      .then(json=>{
        this.props.dispatch(setProducts(json));
      })
  }
  render(){
    
    return(
      
      <div className="App">
        
        <Router>
            
          <Switch>
          <Route > 
              <NavBar/>
            <Route  path="/ecom-react/Product">
              <ProductPage/>
            </Route>  
            <Route exact path="/ecom-react/Products">
            
              <Products />

            </Route>
            <Route exact path="/ecom-react/Add-Product">
              <Add_Products></Add_Products>
            </Route>
            <Route exact path="/ecom-react/cart">
              <Cart></Cart>
            </Route>
            </Route>
          </Switch>
        </Router>
      </div>
      
    )
  }
}
function mapStateToProps(state){
  return{

  }
}
export default connect(mapStateToProps)(App);
