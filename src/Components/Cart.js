import React from "react";
import { connect } from "react-redux";

import Cart_item from "./Cart_item";
import { PLACE_ORDER } from "../actions/ProductsAction";
class Cart extends React.Component {
   // checkout for placing order
   checkout = () => {
      this.props.dispatch(PLACE_ORDER());
   };
   render() {
      const { cart } = this.props;
      let cost = 0;
      return (
         <div className="cart-container">
            <div className="product-list">
               {cart.map((item, index) => {
                  cost += item.qty * item.product.product_price;
                  return (
                     <Cart_item
                        cart={item}
                        dispatch={this.props.dispatch}
                        key={index}
                     />
                  );
               })}
            </div>
            <div className="total">
               Total Cost :{cost}
               <button className="checkout" onClick={this.checkout}>
                  checkout
               </button>
            </div>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      cart: state.products.cart,
   };
};
export default connect(mapStateToProps)(Cart);
