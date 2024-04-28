import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import './productListing.css'
const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const apiUrl = "http://localhost:8000/products";

        
        const response = await axios.get(apiUrl);

        
        setProducts(response.data);
      } catch (error) {
        
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  if (!products) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="product-container">
      <h1 className="product-page-title">Product Listing Page</h1>
      <div className="product-grid">
        {products &&
          products.length > 0 &&
          products.map((item, index) => (
            <div key={index}>
              <Card
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                id={item._id}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
