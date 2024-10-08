import React from 'react';
import './ProductCard.css';  

const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
