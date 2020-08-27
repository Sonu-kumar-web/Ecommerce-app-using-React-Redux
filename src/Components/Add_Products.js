import { createRef } from "react";
import { connect } from "react-redux";
import React from "react";
import { ADD_PRODUCT } from "../actions/ProductsAction";
class Add_Products extends React.Component {
   constructor(props) {
      super(props);
      this.nameRef = createRef();
      this.priceRef = createRef();
      this.ratingRef = createRef();
      this.descriptionRef = createRef();
   }
   // add product to db
   addProduct = (e) => {
      e.preventDefault();

      let product = {
         product_name: this.nameRef.current.value,
         product_price: this.priceRef.current.value,
         rating: this.ratingRef.current.value,
         product_description: this.descriptionRef.current.value,
      };

      if (
         product.product_name === "" ||
         product.product_description === "" ||
         product.product_price < 0 ||
         product.rating < 0 ||
         product.rating > 5
      ) {
         console.log("Invalid data formats");
         return;
      }

      this.props.dispatch(ADD_PRODUCT(product));
      e.target.reset();
   };
   render() {
      return (
         <form onSubmit={this.addProduct} className="Add-product-container">
            <div className="Input-element">
               <label for="name">Name</label>
               <input type="text" ref={this.nameRef} id="name" placeholder="" />
            </div>
            <div className="Input-element">
               <label for="price">Price</label>
               <input type="number" ref={this.priceRef} id="price" min="0" />
            </div>
            <div className="Input-element">
               <label for="rating">Rating</label>
               <input
                  type="number"
                  max="5"
                  min="0"
                  ref={this.ratingRef}
                  id="rating"
               />
            </div>
            <div className="Input-element">
               <label for="description">Description</label>
               <textarea ref={this.descriptionRef} rows="2" id="description" />
            </div>
            <input type="submit" value="Add Product" id="add" />
         </form>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      ...state,
   };
};

export default connect(mapStateToProps)(Add_Products);
