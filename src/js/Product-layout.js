/**
 * Created by savsu on 15/02/2018.
 */

import React, {Component} from 'react';


/**
 * This is a product layout template
 * which can be re-used to display a single product item
 * in any catalog layout type
 */

class ProductLayout extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="p-2 product-holder-grp">
                <div className="product-holder mt-4 mb-4">
                    <img className="img-fluid" src={`../src/products-images/${this.props.product.productImage}`} alt={this.props.product.productName}/>
                    {(this.props.product.isExclusive)? <div className="exclusive w-50 p-2 text-center mt-4 mb-3">Exclusive</div>:null}
                    {(this.props.product.isSale)? <div className="sale w-25 p-2 text-center mt-4 mb-3">Sale</div>:null}
                    {(!this.props.product.isExclusive && !this.props.product.isSale)? <div className="invisible w-25 p-2 mt-4 mb-3">placeholder</div>:null}
                    <p className="product-title">{this.props.product.productName}</p>
                    <p className="product-price">{this.props.product.price}</p>
                </div>
            </div>
        );
    }
}

export default ProductLayout;

