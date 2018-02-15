/**
 * Created by savsu on 15/02/2018.
 */

import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import ProductLayout from './Product-layout';

/**
 * App.js is the main component for this product catalog
 */
class App extends Component {
    constructor(){
        super();
        this.state = {
            products:[],
            filterVal: "ALL"
        };
        this.filterBySize = this.filterBySize.bind(this);
    }
    componentDidMount(){
        let _this = this;
        axios({
            method: 'get',
            url: '../src/products-data/products.json'
        })
            .then(function (response) {
                // console.log(response);

                /**Check for undefined error*/
                if(response.data.length !== undefined){
                    _this.setState({
                        products:response.data
                    })
                }

            })
            .catch(function (err) {
                console.log(err);
            })
    }
    /**
     * This function is triggerred everytime when a
     * change occurs in the dropdown filter menu
     * */
    filterBySize(e){
        // console.log(e.target.value);
        let targetVal = e.target.value;

        this.setState({
           filterVal: targetVal
        });

    }
    render(){
        let _this = this;
        return(
            <div>
                <div className="container">

                    {/**Title and filtering section*/}
                    <div className="row header-section">
                        <div className="col-sm-12 title-container p-2 mt-5 mb-3">
                            <div>
                                <h2 className="d-inline-block mb-0">Women's tops</h2>
                                <div className="form-group float-right mb-0">
                                    <select className="form-control" name="filter" id="filter-grp" defaultValue="filter-by-size" onChange={this.filterBySize.bind(this)}>
                                        <option disabled="disabled" value="filter-by-size">Filter by size</option>
                                        <option value="XS">Size - XS</option>
                                        <option value="S">Size - S</option>
                                        <option value="M">Size - M</option>
                                        <option value="L">Size - L</option>
                                        <option value="XL">Size - XL</option>
                                        <option value="ALL">All Sizes</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/**Product catalog layout*/}
                    <div className="row mb-5">
                        {/**Iterate over and render the products catalog*/}
                        {(_this.state.products.length > 0)
                            ?
                            _this.state.products.map(function(item,index){
                                /**When a filter is applied, based on the selected filters
                                 it add/remove or show all the products*/
                                if(_this.state.filterVal !== "ALL"){
                                    if(item.size.indexOf(_this.state.filterVal) !== -1){
                                        return(
                                            /**Product layout template*/
                                            <ProductLayout key={index} product={item}/>
                                        );
                                    }
                                } else {
                                    return(
                                        /**Product layout template*/
                                        <ProductLayout key={index} product={item}/>
                                    );
                                }
                            })
                            :
                            <div>
                                <h2>No products found</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App;