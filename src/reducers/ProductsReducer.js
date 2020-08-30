import {
   ADD_PRODUCTS,
   DELETE_PRODUCTS,
   UPDATE_PRODUCTS,
   UPDATE_QUANTITY,
   DELETE_CART_PRODUCTS,
   ADD_PRODUCT_CART,
   SORT_PRODUCTS,
   RESET_FILTER,
   CLEAR_CART,
   SET_PRODUCTS_LIST,
} from "../actions/ActionTypes";
import Noty from "noty";

// flash notification using noty
function flash(text) {
   let n = new Noty({
      text,
      layout: "topRight",
      type: "success",
   });
   n.show();
}

// initial state
const initState = {
   products: [],
   cart: [],
};

function ProductsReducer(state = initState, action) {
   // flash message for notification
   if (action.message) flash(action.message);
   switch (action.type) {
      //set products
      case SET_PRODUCTS_LIST: {
         return {
            ...state,
            products: action.products,
         };
      }

      // Add products by pushing to end filter is ignored
      case ADD_PRODUCTS: {
         let products = [];
         Object.assign(products, state.products);
         products.push(action.product);

         return {
            ...state,
            products,
         };
      }

      // delete from list of products
      case DELETE_PRODUCTS: {
         let products = state.products.filter((item) => {
            return !(item.id === action.id);
         });
         return {
            ...state,
            products,
         };
      }

      // update products
      case UPDATE_PRODUCTS: {
         let products = [];
         let cart = [];
         Object.assign(products, state.products);
         Object.assign(cart, state.cart);
         for (let i in products) {
            if (products[i].id === action.product.id)
               products[i] = action.product;
         }
         for (let i in cart) {
            if (action.product.id === cart[i].product.id)
               cart[i].product = action.product;
         }

         return {
            ...state,
            products,
            cart,
         };
      }

      // update qty of product
      case UPDATE_QUANTITY: {
         let cart = [];
         Object.assign(cart, state.cart);
         for (let i in cart) {
            if (cart[i].id === action.cart.id) {
               cart[i] = action.cart;
            }
         }
         return {
            ...state,
            cart,
         };
      }

      // delete from cart
      case DELETE_CART_PRODUCTS: {
         let cart = [];
         let index = -1;
         Object.assign(cart, state.cart);
         index = cart.findIndex((item) => item.id === action.id);

         cart.splice(index, 1);
         return {
            ...state,
            cart,
         };
      }

      // add to cart
      case ADD_PRODUCT_CART: {
         let cart = [];
         Object.assign(cart, state.cart);
         cart.push(action.cart);

         return {
            ...state,
            cart,
         };
      }

      // sort filter on the main list of products all updates and deletion are done on this
      case SORT_PRODUCTS: {
         let products = [];
         Object.assign(products, state.products);
         products.sort((a, b) => a.product_price - b.product_price);
         return {
            ...state,
            products,
         };
      }

      // reset sorting
      case RESET_FILTER: {
         return {
            ...state,
            products: action.products,
         };
      }

      // clear cart
      case CLEAR_CART: {
         return {
            ...state,
            cart: [],
         };
      }

      default:
         return state;
   }
}

export default ProductsReducer;
