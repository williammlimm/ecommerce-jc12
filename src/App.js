import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LoginPage from './Pages/LoginPage';
// import RegisterPage from './Pages/RegisterPage';
import RegisterPage from './Pages/RegisterHooks'
import ProductsPage from './Pages/ProductsPage'

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/products' component={ProductsPage} />
        <Footer/>
      </div>
    )
  }
}

export default App;
