import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  product.description.slice(0,20);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription = product.description.slice(0, 50); // Show only the first 100 characters

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product-description">
        {showFullDescription ? product.description : `${shortDescription}...`}
        <button className="toggle-btn" onClick={toggleDescription}>
          {showFullDescription ? 'Read Less' : 'Read More'}
        </button>
      </p>
      <p><strong>₹{product.price}</strong></p>
      <div className="button-container">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
