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
} from "./ActionTypes";
import APIUrls from "../helper/APIUrls";
/**
 * Adds product to the db
 * @param {*} product
 */
function ADD_PRODUCT(product) {
   return async function (dispatch) {
      try {
         let options = {
            method: "POST",
            mode: "cors",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(product),
         };
         let response = await fetch(APIUrls.add_products, options);
         if (response.status === 201) {
            let json = await response.json();
            product = json;

            dispatch(addProduct(json));
         }
      } catch (e) {
         console.log(e);
      }
   };
}
/**
 * Deletes product from db
 * @param {*} product_id
 */
function DELETE_PRODUCT(product) {
   return async function (dispatch) {
      try {
         let options = {
            method: "DELETE",
            mode: "cors",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(product),
         };
         let json = await fetch(
            APIUrls.delete_products + "/" + product.id,
            options
         ).then((response) => response.json());

         dispatch(deleteProduct(product.id));
      } catch (e) {
         console.log(e);
      }
   };
}
/**
 * Update product details
 * @param {*} product
 */
function UPDATE_PRODUCT(product) {
   return async function (dispatch) {
      if (product.rating > 5) product.rating = 5;
      else if (product.rating < 0) product.rating = 0;
      try {
         let options = {
            method: "PUT",
            mode: "cors",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(product),
         };
         let json = await fetch(
            APIUrls.add_products + "/" + product.id,
            options
         ).then((response) => {
            //  console.log(response)
            return response.json();
         });

         dispatch(updateProduct(json));
      } catch (e) {
         console.log(e);
      }
   };
}
/**
 * remove product from cart
 * @param {*} product_id
 */
function DELETE_CART_PRODUCT(product_id) {
   return async function (dispatch) {
      try {
         /**
          * uncomment for adding to cart db
          */
         // let options={
         //     method:'POST',
         //     mode:"cors",
         //     headers:{
         //         'content-type':'application/json'
         //     },
         //     body:JSON.stringify(product_id)
         // }
         // let json=await fetch(APIUrls.delete_cart_products,options).then(response=>response.json());
         // console.log("deleting cart",json)
         dispatch(deleteCartProduct(product_id));
      } catch (e) {
         console.log(e);
      }
   };
}
/**
 * update product quantity
 * @param {*} val
 * @param {*} cart_item
 */
function UPDATE_QTY(val, cart_item) {
   return async function (dispatch) {
      if (cart_item.qty + val >= 1) {
         cart_item.qty += val;
      } else {
         dispatch(Nochange());
         return;
      }

      try {
         /**
          * uncomment for adding to cart db
          */
         // let options={
         //     method:'POST',
         //     mode:"cors",
         //     headers:{
         //         'content-type':'application/json'
         //     },
         //     body:JSON.stringify(cart_item)
         // }
         // let json=await fetch(APIUrls.update_quantity,options).then(response=>response.json());
         // console.log(json)
         dispatch(updateQty(cart_item));
      } catch (e) {
         console.log(e);
      }
   };
}
/**
 * Add product to cart
 * @param {*} product
 */

function ADD_CART_PRODUCT(product) {
   return async function (dispatch, getState) {
      let state = getState();
      try {
         if (
            state.products.cart.findIndex((item) => {
               return item.product.id === product.id;
            }) !== -1
         ) {
            dispatch(Nochange());
            return;
         }
         let cart = {
            product,
            qty: 1,
            totalCost: product.product_price,
         };
         let options = {
            method: "POST",
            mode: "cors",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(cart),
         };
         let response = await fetch(APIUrls.add_cart_products, options);
         //  console.log(response)
         if (response.status === 201) {
            let json = await response.json();
            product = json;

            dispatch(addProductCart(json));
         } else {
            dispatch(Nochange());
         }
      } catch (e) {
         console.log(e);
      }
   };
}
/**
 * Reset filter of sorting
 *
 */
function RESET() {
   return async (dispatch) => {
      let json = await fetch(APIUrls.get_products).then((response) =>
         response.json()
      );

      dispatch(reset(json));
   };
}
/**
 * sort the products based on price
 */
function SORT() {
   return {
      type: SORT_PRODUCTS,
   };
}
/**
 * checkout and clear cart
 */
function PLACE_ORDER() {
   return async (dispatch) => {
      let json = {
         status: 201,
      };
      if (json.status === 201) return dispatch(order());
      return Nochange("Order cannot be placed");
   };
}

/**
 * reset for reducer
 * @param {} products
 */
function reset(products) {
   return {
      type: RESET_FILTER,
      products,
   };
}
/**
 * update qty
 * @param {*} cart
 */
function updateQty(cart) {
   // console.log("Action", cart);
   return {
      type: UPDATE_QUANTITY,
      cart,
   };
}
/**
 * instruct reducer to add product to the views
 * @param {*} product
 */
function addProduct(product) {
   let message = "Product Added";
   return {
      type: ADD_PRODUCTS,
      product,
      message,
   };
}
/**
 * remove product form view
 * @param {} id
 */
function deleteProduct(id) {
   let message = "Product deleted ";
   return {
      type: DELETE_PRODUCTS,
      id,
      message,
   };
}
/**
 * update product locally
 * @param {*} product
 */
function updateProduct(product) {
   let message = "product updated";
   return {
      type: UPDATE_PRODUCTS,
      product,
      message,
   };
}
/**
 * delete product from cart
 * @param {*} id
 */
function deleteCartProduct(id) {
   let message = "product removed from cart";
   return {
      type: DELETE_CART_PRODUCTS,
      id,
      message,
   };
}
/**
 * add product to cart
 * @param {*} cart
 */
function addProductCart(cart) {
   let message = "Added to cart ";
   return {
      type: ADD_PRODUCT_CART,
      cart,
      message,
   };
}
/**
 * place order
 */
function order() {
   return {
      type: CLEAR_CART,
      message: "Order placed Successfully",
   };
}
/**
 * instruct with no change of state
 * @param {*} message
 */
function Nochange(message) {
   return {
      type: "DEFAULT",
      message,
   };
}

/**
 * set products from server
 */

function setProducts(products) {
   return {
      type: SET_PRODUCTS_LIST,
      products,
   };
}
export {
   ADD_PRODUCT,
   DELETE_PRODUCT,
   UPDATE_PRODUCT,
   UPDATE_QTY,
   DELETE_CART_PRODUCT,
   ADD_CART_PRODUCT,
   SORT,
   RESET,
   PLACE_ORDER,
   setProducts,
};
