import React from 'react';
import "../css/Products.css"
import Footer from '../js/Footer';
import Header from '../js/Header';
import Carousel from '../js/Carousel';
import AppNavbar from '../components/AppNavbar';

function Products() {
    return(
            <div>
              <AppNavbar/>
              <br/> <br/> 
              <Carousel />
              <Footer />
            </div>
     
     
    );
}

export default Products;


