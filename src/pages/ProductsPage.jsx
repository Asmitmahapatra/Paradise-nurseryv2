import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "./ProductsPage.css";

export default function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const plants = [
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      image: "/plants/snake.jpg",
      category: "Indoor",
    },
    {
      id: 2,
      name: "Monstera",
      price: 22,
      image: "/plants/monstera.jpg",
      category: "Indoor",
    },
    {
      id: 3,
      name: "Aloe Vera",
      price: 10,
      image: "/plants/aloe.jpg",
      category: "Medicinal",
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 12,
      image: "/plants/spider.jpg",
      category: "Indoor",
    },
    {
      id: 5,
      name: "Peace Lily",
      price: 18,
      image: "/plants/peace.jpg",
      category: "Flowering",
    },
    {
      id: 6,
      name: "Rose Plant",
      price: 20,
      image: "/plants/rose.jpg",
      category: "Flowering",
    },
  ];

  function addToCartHandler(item) {
    dispatch(addToCart(item));
  }

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="products-grid">
        {plants.map((p) => (
          <div key={p.id} className="product-card">
            <img
              src={p.image}
              alt={p.name}
            />
            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="category">{p.category}</p>
              <p className="product-price">${p.price}</p>

              <button
                className="add-to-cart-btn"
                disabled={cart[p.id]}
                onClick={() => addToCartHandler(p)}
              >
                {cart[p.id]
                  ? "✓ Added"
                  : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}