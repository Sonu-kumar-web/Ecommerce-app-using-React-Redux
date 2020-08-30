import React, { createRef } from "react";

class EditableProduct extends React.Component {
   constructor(props) {
      super(props);
      this.nameRef = createRef();
      this.priceRef = createRef();
      this.ratingRef = createRef();
      this.descriptionRef = createRef();
   }

   //save change to products after editing
   saveHandler = (e) => {
      let product = {
         id: this.props.product.id,
         product_name: this.nameRef.current.value,
         product_price: this.priceRef.current.value,
         rating: this.ratingRef.current.value,
         product_description: this.descriptionRef.current.value,
         avatar: this.props.product.avatar,
      };
      this.props.saveHandler(product);
   };

   //cancel edit
   resetHandler = (e) => {
      this.props.resetHandler(e);
   };
   render() {
      const {
         avatar,
         rating,
         product_description,
         product_name,
         product_price,
      } = this.props.product;
      return (
         <div className="product-container">
            <div className="left">
               <div className="avatar">
                  <img src={avatar} alt="avatar" />
               </div>
               <div className="product-details">
                  <div className="top">
                     <div className="product-name">
                        <input
                           type="text"
                           ref={this.nameRef}
                           defaultValue={product_name}
                        ></input>
                     </div>
                     <div className="product-price">
                        <input
                           type="Number"
                           ref={this.priceRef}
                           defaultValue={product_price}
                        />
                     </div>
                  </div>
                  <div className="bottom">
                     <input
                        type="number"
                        defaultValue={rating}
                        ref={this.ratingRef}
                     />
                  </div>
               </div>
            </div>
            <div className="right">
               <div className="description">
                  <textarea
                     ref={this.descriptionRef}
                     defaultValue={product_description}
                  />
               </div>
               <div className="options">
                  <div className="icon" onClick={this.saveHandler}>
                     <img
                        src="https://image.flaticon.com/icons/svg/907/907027.svg"
                        alt="save"
                     />
                  </div>
                  <div className="icon" onClick={this.resetHandler}>
                     <img
                        src="https://image.flaticon.com/icons/svg/2919/2919590.svg"
                        alt="cancel"
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default EditableProduct;
