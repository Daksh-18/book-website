import React from 'react';
import ProductCard from './ProductCard';    
// import About from './About.jsx';
import Shop from './Shop.jsx';
import About from './About';
import '../App.css';


const Home = () => {
  const products = [
    { id: 1, name: "A Tree Grows in Broklyn", price: "Rs 1150/-", imageUrl: "https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1557422591/pro_pbid_4184.jpg" },
    { id: 2, name: "The Fabric of The Cosmos", price: "Rs 750/-", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1435242004i/22435.jpg" },
    { id: 3, name: "Harry Potter and The Sorcere's Stone", price: "Rs 2050/-", imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598823299i/42844155.jpg" },
  ];

  return (
    <div className="home-container">
      <section className="hero">
          <div className="writing">
            <h1><span>Welcome to</span></h1>
            <h1><span>ReadSphere</span></h1>
            <p>Where the world of books meets the world of you.</p>
            <p>Your gateway to endless stories.</p>
          </div>
          <div className="hero-image">
            {/* <div className="hero-text">
              Welcome people t.
            </div> */}
          </div>
      </section> 

      <div className='headpro'>
        <h1>Featured Products</h1>
        <div className="shop-all-btn-container">
            <a href="/shop" className="shop-all-btn">Shop all</a>
        </div>
      </div>
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
      {/* <About /> */}
      <Shop />
      <About />
    </div>
  );
};

export default Home;
