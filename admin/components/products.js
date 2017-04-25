import React from 'react';

class Products extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            product: []
        };
        
    }
    
    componentDidMount(){
        const data = [
        {
            id: 1,
            name: "Toy",
            price: 2
        },
        {
            id: 2,
            name: "Doll",
            price: 5
        }
        ];
        this.setState({product: data});
    }
    
    render(){
        const product = this.state.product;
        return(<h1>{product}</h1>);
    }
}

export default Products;