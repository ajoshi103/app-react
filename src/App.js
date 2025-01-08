import React from 'react';
import ProductList from './component/ProductList';
import './input.css';

const App = () => (
  <div className="app">
    <header className="app-header">
      <h1>ShopCart</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <ProductList />
    </main>
    <footer className="app-footer">
      <p>© 2025 E-Commerce Website</p>
    </footer>
  </div>
);

export default App;
