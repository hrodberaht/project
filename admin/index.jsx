import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import NavBar from './components/navBar';
import IndexPage from './components/indexPage';
import Products from './components/products';


render(
    <Router>
        <div>
            <Header/>
            <NavBar/>
            <Route exact path="/admin" component={IndexPage} />
            <Route path="/admin/products" component={Products} />
            <Footer/>
        </div>
    </Router>,
    document.getElementById("app")
);