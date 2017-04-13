import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Home extends React.Component {
    render(){
        return(
        <div>
            <ul>
                <li><Link to="/admin">Home</Link></li>
                <li><Link to="/admin/products">Products</Link></li>
            </ul>
        </div>
        );
    }
}

class IndexPage extends React.Component {
    render(){
        return(<h1>React</h1>);
    }
}

class Products extends React.Component {
    render(){
        return(<h1>Products</h1>);
    }
}


render(
    <Router>
        <div>
            <Home/>
            <Route exact path="/admin" component={IndexPage} />
            <Route path="/admin/products" component={Products} />
        </div>
    </Router>,
    document.getElementById("app")
);