import React from 'react';

class Products extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            toys: []
        };
        
    }
    
    componentDidMount(){
        
        const data = [
        {
            id: 1,
            name: "Car",
            price: "2"
        },
        {
            id: 2,
            name: "Doll",
            price: "5"
        }
        ];
        
        this.setState({toys: data});
    }
    
    render(){
        // Map through cars and return linked cars
        const toysNode = this.state.toys.map((toy) => {
            return (
               <p key={toy.id}><a
                    href="#"
                    className="list-group-item"
                    >
                    {toy.name}
                </a></p>
            );
        });
        return (
            <div>
                <h1>Products</h1>
                <div className="list-group">
                    {toysNode}
                </div>
            </div>
        );
    }
}

export default Products;