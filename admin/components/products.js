import React from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    
    render(){
        // Map through cars and return linked cars
        const toysNode = this.props.data.map((data) => {
            return (
               <p key={data.id}>
                    <Link to={"products/"+ data.id}>
                        {data.name}
                    </Link>
                </p>
            );
        });
        return (
            <div>
                <h1>Products</h1>
                <p>{this.props.title}</p>
                <div className="list-group">
                    {toysNode}
                </div>
            </div>
        );
    }
}

export default Products;