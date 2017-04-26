import React from 'react';
import { Link } from 'react-router-dom';

class ProductsDetail extends React.Component {
    render(){
        return(
            <div>
                <h1>Details</h1>
                <p>{this.props.match.params.id}</p>
            </div>
        );
    }
    
    
}


export default ProductsDetail;
