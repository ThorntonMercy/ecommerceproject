import { useState } from 'react'
import ProductList from './components/ProductList'
import './App.css';

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "PlayStation 5 Slim",
      price: "$429.99",
      description: "Slim built, powerful console to play all your favorites.",
      brand: "PlayStation",
      photo: "images/ps5.webp"
    },
    {
      id: 2,
      name: "Nintendo Switch",
      price: "$249.99",
      description: "Handheld gaming device that can travel anywhere or stay at home.",
      brand: "Nintendo",
      photo: "images/switch.avif"
    },
    {
      id: 3,
      name: "Xbox Series X",
      price: "$419.99",
      description: "Backwards compatible with previous generations.",
      brand: "Xbox",
      photo: "images/xboxs.png"
    }
  ]);

  return (
    <div className="container">
      <h1 className="title">Project Store</h1>
      <ProductList products={products} />
    </div>
  ) 
} 
export default App
