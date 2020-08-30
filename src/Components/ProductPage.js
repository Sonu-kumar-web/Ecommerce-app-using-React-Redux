import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Rating } from "./Product";
import { ADD_CART_PRODUCT } from "../actions/ProductsAction";

// Products page showing details of products
function ProductPage(props) {
   const { product } = props.location.state;
   function addToCart(e) {
      e.stopPropagation();
      props.dispatch(ADD_CART_PRODUCT(product));
   }

   return (
      <div className="product">
         <div className="product-name ">{product.product_name}</div>
         <div className="details">
            <div className="left">
               <img className="avatar" src={product.avatar} alt="avatar"></img>
            </div>
            <div className="right">
               <h3 className="heading">Price</h3>
               <div className="product-price margin-left-20">
                  {product.product_price}
               </div>
               <h3>Rating</h3>
               <div className="product-rating margin-left-20">
                  <Rating rating={product.rating} />
               </div>
               <h3 className="heading">Description</h3>
               <div className="product-description margin-left-20">
                  {product.product_description}
               </div>
               <button onClick={addToCart} className="addtocart">
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   );
}

// to extract dispatch
function mapStateToProps(state) {
   return {};
}
export default withRouter(connect(mapStateToProps)(ProductPage));
