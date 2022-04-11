import React from "react";
import ProductCard from "./components/product/ProductCard";
import Header from "./components/Header"
import * as data from './data.js';
import FreeSpace from './components/FreeSpace';

function App() {
    return (
        <div id="Container">
            <Header />
            <FreeSpace style={{height: '80px'}} />
            <ProductCard {...data.product1} />
            <ProductCard {...data.product2} />
            <ProductCard {...data.product3} />
            <ProductCard {...data.product4} />
            <ProductCard {...data.product5} />
            <ProductCard {...data.product6} />  
        </div>
        
  );
}

export default App;
