import React from 'react';
import ProductCard from './ProductCard';  
import '../App.css';     // here using global style 

const Shop = () => {
  const products = [
    { id: 1, name: "Product 1", price: "Rs 999/-", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660273739i/11870085._SX300_.jpg" },
    { id: 2, name: "Product 2", price: "Rs 1515/-", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052._SX300_.jpg" },
    { id: 3, name: "Harry Potter and The Sorcere's Stone", price: "Rs 2050/-", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg" },
    { id: 3, name: "The Fabric of The Cosmos", price: "Rs 750/-", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1435242004i/22435.jpg" },
    { id: 3, name: "The Lovely Bones", price: "Rs 2549/-", imageUrl: "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1592698150/pro_pbid_4208.jpg" },
    { id: 3, name: "A Tree Grows in Broklyn", price: "Rs 1150/-", imageUrl: "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1557422591/pro_pbid_4184.jpg" },
    
  ];

  return (
    <div className="shop-container">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
