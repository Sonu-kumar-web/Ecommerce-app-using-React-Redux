import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Navigate to respective routes
class NavBar extends React.Component {
   render() {
      return (
         <div className="NavBar">
            <div className="left">
               <Link to="/Ecommerce-app-using-React-Redux/Products">
                  <div className="nav-link"> Products</div>
               </Link>
               <Link to="/Ecommerce-app-using-React-Redux/Add-Product">
                  <div className="nav-link">Add_product</div>
               </Link>
            </div>
            <div className="right">
               <Link to="/Ecommerce-app-using-React-Redux/cart">
                  <div className="nav-link">
                     <img
                        src="https://image.flaticon.com/icons/svg/1170/1170576.svg"
                        alt="Cart"
                     ></img>
                     <sup>{this.props.cartQty}</sup>
                  </div>
               </Link>
            </div>
         </div>
      );
   }
}
function mapStateToProps(state) {
   let cartQty = 0;
   for (let i of state.products.cart) cartQty += i.qty;
   return {
      cartQty,
   };
}

export default connect(mapStateToProps)(NavBar);
