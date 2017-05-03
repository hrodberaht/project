import React from 'react';


class ProductsDetail extends React.Component {
    render(){
        return(
            <div>
                <h1>Details</h1>
                <p>{"id: " + this.props.match.params.id}</p>
            </div>
        );
    }
    
    
}


export default ProductsDetail;
