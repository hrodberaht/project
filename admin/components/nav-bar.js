import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/admin">Home</Link></li>
                    <li><Link to="/admin/products">Products</Link></li>
                    <li><Link to="/admin/products/2">Products2</Link></li>
                </ul>
            </nav>
        );
    }
}