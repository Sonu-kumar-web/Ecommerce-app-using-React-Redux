import React from 'react';
import { Product } from './Product';

import Options from './Options';
import {UPDATE_QTY,DELETE_CART_PRODUCT,UPDATE_PRODUCT} from '../actions/ProductsAction'
class Cart_item extends React.Component{
    /**
     * handle qty change
     */
    changeHandler=(e)=>{
            if(e.target.value<0)
                e.target.value=0;
            this.props.dispatch(UPDATE_QTY(e.target.value,this.props.cart))
    }
    // increment qty
    increment=(e)=>{
        this.props.dispatch(UPDATE_QTY(1,this.props.cart))
    }
    //decrement qty
    decrement=(e)=>{
        
        this.props.dispatch(UPDATE_QTY(-1,this.props.cart));
    }
    //delete itsm
    deleteHandler=(e)=>{
        this.props.dispatch(DELETE_CART_PRODUCT(this.props.cart.id))
    }
    //make product changes
    saveHandler=(product)=>{
        this.props.dispatch(UPDATE_PRODUCT(product))
    }
    render(){
        
        return(
            <div className="cart_item">
                    <Product product={this.props.cart.product}  hideAddToCart={true} deleteHandler={this.deleteHandler} saveHandler={this.saveHandler}/>
                    <div className="qty-container">
                    
                    <div className="options vertical">
                    <Options handler={this.increment} src={"https://image.flaticon.com/icons/svg/1237/1237946.svg"} alt={"increment"} style={{height:1+'em'}}></Options>
                    <div className="qty">{this.props.cart.qty}</div>
                    <Options handler={this.decrement} src={"https://image.flaticon.com/icons/svg/1828/1828901.svg"} alt={"decrement"} style={{height:1+'em'}}></Options>
                   
                    </div>
                    <div style={{margin :'5px' }}>
                        Total Cost  : {this.props.cart.qty*this.props.cart.product.product_price}
                    </div>
                    </div>
            </div>
        )
    }
}


export default Cart_item;