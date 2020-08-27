import React from 'react';
import {
    Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
/**
 * Navigate to respective routes
 */
class NavBar extends React.Component{
   

    render(){
        return(
            
            <div className="NavBar">
                <div className="left">
                <Link to ="/ecom-react/Products" ><div className="nav-link"> Products</div></Link>
                <Link to="/ecom-react/Add-Product"><div className="nav-link">Add product</div></Link>
                </div>
                <div className="right">
                <Link to="/ecom-react/cart"><div className="nav-link"><img src="https://image.flaticon.com/icons/svg/3225/3225200.svg" alt="Cart"></img><sup>{this.props.cartQty}</sup></div></Link>
                </div>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    
    let cartQty=0;
    for(let i of state.products.cart)
        cartQty+=i.qty;
    return {
        cartQty
    }
}

export default connect(mapStateToProps)(NavBar);