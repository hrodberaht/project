import React from 'react';
import { Link } from 'react-router-dom';

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
               <p key={toy.id}>
                    <Link to={"products/"+ toy.id}>
                        {toy.name}
                    </Link>
                </p>
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