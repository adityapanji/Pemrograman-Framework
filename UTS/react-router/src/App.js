import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutComponent from './component/AboutComponent';
import ProductComponent from './component/ProductComponent';
import KeranjangComponent from './component/KeranjangComponent';

export default function Tugas() {
  return (
    <Router>
      <div class="topnav">
        
          
            <Link to="/home">Home</Link>
          
            <Link to="/product">List Product</Link>
          
            <Link to="/about">About</Link>
          
            <Link to="/keranjang">Keranjang Belanja</Link>
      </div>
      <div>
        <hr />

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/product">
            <ProductComponent />
          </Route>
          <Route path="/about">
            <About />
            <AboutComponent />
          </Route>
          <Route path="/keranjang">
            <Keranjang />
            <KeranjangComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div class="jumbotron text-center">
      <h1>Selamat Datang di Waduhek Shop</h1>
          <p>Gausah sambat langsung beli !!!</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Keranjang() {
  return (
    <div>
      <h2>Keranjang Belanja</h2>
    </div>
  );
}