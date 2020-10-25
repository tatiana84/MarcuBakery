import React, {Component} from 'react';
import axios from "axios";

import BrownPriceTag from '../brownPriceTag';
import Quantity from '../quantity';

class BakeryItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          BakeryItemClass: ""
        }
        this.bakery = this.bakery.bind(this);
    }
    
    /*bakery(){
        const {imageUrl, name, description, price} = this.state.data;
        return
        this.state.data.map(item => {
            return <bakery key={item.id} item={item} />;
        });
    }*/
    /*bakery() {
        return this.state.data.map(item => {
          return <bakery key={item.id} item={item} />;
        });
    }*/
    bakery() {
        return this.state.data.map(bakery => {
          return <bakery key={bakery.id} bakery={bakery} />;
        });
    }


    getBakery() {
        const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/';
        const query = `{"_id":"${this.props.match.params.bakery_id}"}`; 
        const url = `${url_temp_prefix}https://frontdb-214a.restdb.io/rest/bakery?q=${query}`;
        //const url = `${url_temp_prefix}https://bakeryproducts-0506.restdb.io/rest/bakery?q=${query}`;
     
        const data =   {
            "async": true,
            "crossDomain": true,
            "headers": {
            "content-type": "application/json",
            "x-apikey": "8b5e2e1cb8c2cc3be9622f06ca0958d1048d4",
            "cache-control": "no-cache"
        }};
    
        axios.get(url,data)
        .then(response => {
            console.log('responsesd',response.data);
            this.setState({
                data : response.data
            }
        )
        })
        .catch(error => {
            console.log('error',error);
        });
    }

    /*bakery() {
        return this.state.data.map(item => {
          return <bakery key={item.id} item={item} />;
        });
    }*/

    componentWillMount() {
        this.getBakery();
    }

    render() {
        console.log('this.state.data', this.state.data)
        return (
            <div>
                {this.state.data != null ? this.bakery() : 'Loading'}
            </div>
        );
    }
}

export default BakeryItem;