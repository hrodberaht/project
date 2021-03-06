import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import NavBar from './components/nav-bar';
import IndexPage from './components/index-page';
import Products from './components/products';
import ProductsDetail from './components/products-detail';


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
    
const title = "title";

render(
    <Router>
        <div>
            <Header/>
            <NavBar/>
            <Route exact path="/admin" component={IndexPage} />
            <Route exact path="/admin/products" render={() => <Products data={data} title={title} />} />
            <Route path="/admin/products/:id" component={ProductsDetail} />
            <Footer/>
        </div>
    </Router>,
    document.getElementById("app")
);