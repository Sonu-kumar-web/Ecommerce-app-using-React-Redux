import React from 'react';
import Options from './Options'
import {Rating} from './Product'
import{ADD_CART_PRODUCT} from '../actions/ProductsAction'

class ProductView extends React.Component{
            //edit product
            editHandler=(e)=>{
                this.props.editHandler(e);
            }
            //delete product
            deleteHandler=(e)=>{
                this.props.deleteHandler(this.props.product.id);
            }
            //add product to cart
            addToCart=(e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    this.props.dispatch(ADD_CART_PRODUCT(this.props.product))
            }
    render(){
        const {avatar,rating,product_description,product_name,product_price}=this.props.product;
        const{hideAddToCart,hideEditOptions}=this.props
        //hide Add to cart button and hide all optins button
        return(
            <div className="product-container">
                       
            <div className="left">
                <div className="avatar" >
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className="product-details">
                    <div className="top">
                            
                            <div className="product-name">{product_name}</div>
                            <div className="product-price">{product_price}</div>
                            
                    </div>
                    <div className="bottom">
                                <Rating rating={rating} />
                    </div>
                </div>
            </div>
            <div className="right">

                <div className="description">
                    {product_description}
                </div>

                <div className="options">
                    {!hideAddToCart&&<button onClick={this.addToCart} >Add To Cart</button>}
                    {!hideEditOptions&&<Options handler={this.editHandler} src="https://image.flaticon.com/icons/svg/715/715750.svg" alt="edit"/>}
                    {!hideEditOptions&&<Options handler={this.deleteHandler} src="https://image.flaticon.com/icons/svg/1214/1214428.svg" alt="delete"/>}
                    
                </div>
            </div>
            </div>        
        )
    }
}

export default ProductView;