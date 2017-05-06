import React from 'react';


class ProductsDetail extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={ 
            "1":1,
            "2":2
            
        };
        
    }
    
    render(){
        
        const id = this.props.match.params.id;
        return(
            <div>
                <h1>Details</h1>
                <p>{"id: " + id}</p>
                <p>{this.state[id]}</p>
            </div>
        );
    }
    
    
}


export default ProductsDetail;
