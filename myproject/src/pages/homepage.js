// Homepage.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/homepage.css';
import toy1 from '../1.webp';
import toy2 from '../2.webp';
import toy3 from '../3.webp';
import toy4 from '../puzzle(1).jpeg';
import toy5 from '../robot.jpeg';
import toy6 from '../train.jpeg';
import toy7 from '../wood.jpeg';
import toy8 from '../car.webp';
import AddToCart from './AddToCart.js'; 

const Homepage = ({ onNavigate }) => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);
  
  // State to manage button text
  const [buttonText, setButtonText] = useState({
    "Action Figure": "Buy Now",
    "Building Blocks": "Buy Now",
    "Plush Bear": "Buy Now",
    "Robot": "Buy Now",
    "Train Set": "Buy Now",
    "Woody": "Buy Now",
    "Puzzle": "Buy Now",
    "Toy Car": "Buy Now"
  });

  

  // Function to handle adding to cart
  
  
  const handleAddToCart = async (itemName, price, imgSrc) => {
    const newItem = { name: itemName, price, img: imgSrc };
  
    try {
      // Add the item to the cartItems state
      if (!cartItems.find(item => item.name === itemName)) {
        setCartItems([...cartItems, newItem]);
        setButtonText({ ...buttonText, [itemName]: "Added to Cart" });
  
        // Add the item to the db.json backend
        await axios.post('http://localhost:3001/cartItems', newItem);
  
        alert(`${itemName} has been added to your cart!`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add the item to the cart. Please try again.");
    }
  };
  
  const handleBuy = () => {
    alert("Items bought successfully!");
    setCartItems([]); 
  };
  const [currentPage, setCurrentPage] = useState('homepage');
  const navigateToAddToCart = () => {
    setCurrentPage('addtocart');
  };

  if (currentPage === 'addtocart') {
    return <AddToCart cartItems={cartItems} onBuy={handleBuy} />;
  }

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-buttons">
          <button className="login-button" onClick={() => onNavigate('login')}>Login</button>
          <button className="login-button" onClick={() => onNavigate('login')}>Log Out</button>
          <button className="login-button" onClick={() => onNavigate('signup')}>Sign Up</button>
          <button className="login-button" onClick={navigateToAddToCart}>Add to Cart</button>
        </div>
      </nav>

      <header className="hero-section">
        <h1>Welcome to the Toy Store!</h1>
        <p>Shop for the best toys in town.</p>
      </header>

      <section className="featured-products">
        <h2>Featured Toys</h2>
        <div className="product-list">
          <div className="product-item">
            <img src={toy1} alt="Toy 1" />
            <h3>Action Figure</h3>
            <p>$19.99</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Action Figure', 19.99,toy1)}
            >
              {buttonText["Action Figure"]}
            </button>
          </div>
          <div className="product-item">
            <img src={toy2} alt="Toy 2" />
            <h3>Building Blocks</h3>
            <p>$29.99</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Building Blocks', 29.99,toy2)}
            >
              {buttonText["Building Blocks"]}
            </button>
          </div>
          <div className="product-item">
            <img src={toy3} alt="Toy 3" />
            <h3>Plush Bear</h3>
            <p>$14.99</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Plush Bear', 14.99,toy3)}
            >
              {buttonText["Plush Bear"]}
            </button>
          </div>
          <div className="product-item">
            <img src={toy5} alt="Toy 5" />
            <h3>Robot</h3>
            <p>$20.99</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Robot', 20.99,toy5)}
            >
              {buttonText["Robot"]}
            </button>
          </div>
        </div>
        <div className="product-list">
          <div className="product-item">
            <img src={toy6} alt="Toy 6" />
            <h3>Train Set</h3>
            <p>$25.16</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Train Set', 25.16,toy6)}
            >
              {buttonText["Train Set"]}
            </button>
          </div>
          <div className="product-item">
            <img src={toy7} alt="Toy 7" />
            <h3>Woody</h3>
            <p>$13.79</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Woody', 13.79,toy7)}
            >
              {buttonText["Woody"]}
            </button>
          </div>
          <div className="product-item">
            <img src={toy4} alt="Toy 4" />
            <h3>Puzzle</h3>
            <p>$9.99</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Puzzle', 9.99,toy4)}
            >
              {buttonText["Puzzle"]}
            </button>
          </div>
          <div className="product-item">
            <img src={toy8} alt="Toy 8" />
            <h3>Toy Car</h3>
            <p>$35.99</p>
            <button 
              className="buy-now-button" 
              onClick={() => handleAddToCart('Toy Car', 35.99,toy8)}
            >
              {buttonText["Toy Car"]}
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          At the Toy Store, we believe in the power of play. Our mission is to provide a wide range of high-quality toys
          that bring joy to children of all ages.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Toy Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
