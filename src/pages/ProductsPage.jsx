import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

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

  function addToCart(item) {
    dispatch({ type: "ADD_TO_CART", payload: item });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {plants.map((p) => (
          <div
            key={p.id}
            style={{
              width: "200px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{p.name}</h3>
            <p>${p.price}</p>

            <button
              disabled={cart.find((x) => x.id === p.id)}
              onClick={() => addToCart(p)}
            >
              {cart.find((x) => x.id === p.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}