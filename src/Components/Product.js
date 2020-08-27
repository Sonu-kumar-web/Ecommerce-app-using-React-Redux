import React from 'react';

import EditableProduct from './EditableProduct'
import ProductView from './ProductView'
import { Link } from 'react-router-dom';
class Product extends React.Component{
        constructor(props){
            super(props);
            this.state={
                edit:false,
                hideOptions:false,
            }
          // console.log("products",props)
        }
        editHandler=(e)=>{
                this.setState((state)=>{
                    return {
                        edit:true
                    }
                })
        }
        deleteHandler=(id)=>{
                if(this.props.deleteHandler)
                    {
                        this.props.deleteHandler(id);
                    }
        }

        saveHandler=(product)=>{
           
               // console.log("save",product)
                if(this.props.saveHandler)
                    {
                        this.props.saveHandler(product);
                    }
                this.resetHandler()
        }

        resetHandler=()=>{
                this.setState((state)=>{
                    return {
                        edit:false,
                    }
                })
        }

        render(){
            const params={
                    editHandler:this.editHandler,
                    deleteHandler:this.deleteHandler,
                    saveHandler:this.saveHandler,
                    resetHandler:this.resetHandler,
                    product:this.props.product,
                    dispatch:this.props.dispatch,
                    hideAddToCart:this.props.hideAddToCart,
                    hideEditOptions:this.props.hideEditOptions
            }
            return(
                 
                 <div className="products-display">
                     
                { !this.state.edit&&
                 <Link to={
                     {
                         pathname:"/ecom-react/Product",
                         state:{
                             product:params.product,
                             
                         }
                            
                             
                         
                     }
                     }  >
                 <ProductView {...params } />
                 </Link>
                 }
                {this.state.edit && <EditableProduct {...params}/>}
                
                </div>
            )
            
        }
}
function Rating(props){
    let stars=props.rating;
    if(stars>5)
        stars=5;
    else if(stars<0)
        stars=0;
    let innerSpanWidth=stars*16+"px";
   
    return(

        <span className="stars">
            <span style={{width:innerSpanWidth}}></span>
        </span>
    )
}


export{
     Product,
     Rating
}
