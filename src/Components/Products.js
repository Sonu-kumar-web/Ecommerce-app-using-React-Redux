import React from "react";
import {
   DELETE_PRODUCT,
   UPDATE_PRODUCT,
   SORT,
   RESET,
} from "../actions/ProductsAction";
import { connect } from "react-redux";
import { Product } from "./Product";

class Products extends React.Component {
   deleteHandler = (id) => {
      this.props.dispatch(DELETE_PRODUCT({ id }));
   };

   saveHandler = (product) => {
      this.props.dispatch(UPDATE_PRODUCT(product));
   };

   sortHandler = () => {
      this.props.dispatch(SORT());
   };

   reset = () => {
      this.props.dispatch(RESET());
   };

   render() {
      const { products } = this.props.products;
      return (
         <div>
            <div className="product-filters">
               <div className="filter">
                  <button className="sort" onClick={this.sortHandler}>
                     Sort
                  </button>
                  <button className="sort" onClick={this.reset}>
                     Reset
                  </button>
               </div>
            </div>
            <div className="productsList">
               {products.map((item, index) => {
                  return (
                     <Product
                        product={item}
                        deleteHandler={this.deleteHandler}
                        saveHandler={this.saveHandler}
                        dispatch={this.props.dispatch}
                        key={index}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      products: state.products,
   };
};

export default connect(mapStateToProps)(Products);
