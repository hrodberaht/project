import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



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

function all(){
    alert(2+2);
}

class IndexPage extends React.Component {
    render(){
        return(
            <div>
                <button onClick={ ()=>all()}>Hej</button>
                <h1>React</h1>
            </div>
        );
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
            <Header/>
            <Home/>
            <Route exact path="/admin" component={IndexPage} />
            <Route path="/admin/products" component={Products} />
            <Footer/>
        </div>
    </Router>,
    document.getElementById("app")
);