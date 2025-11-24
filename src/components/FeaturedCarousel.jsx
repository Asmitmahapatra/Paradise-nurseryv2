import React, { useState, useEffect } from "react";
import "./FeaturedCarousel.css";

const featured = [
  {
    id: 1,
    name: "Snake Plant",
    image: "/plants/snake.jpg",
    desc: "Air-purifying, low maintenance, perfect for beginners.",
  },
  {
    id: 2,
    name: "Monstera",
    image: "/plants/monstera.jpg",
    desc: "Trendy split leaves, loves bright indirect light.",
  },
  {
    id: 3,
    name: "Peace Lily",
    image: "/plants/peace.jpg",
    desc: "Elegant white blooms, great for homes and offices.",
  },
];

export default function FeaturedCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % featured.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIdx(i => (i - 1 + featured.length) % featured.length);
  const next = () => setIdx(i => (i + 1) % featured.length);

  return (
    <div className="carousel-root">
      <button className="carousel-btn left" onClick={prev} aria-label="Previous">‹</button>
      <div className="carousel-card">
        <img src={featured[idx].image} alt={featured[idx].name} />
        <div className="carousel-info">
          <h3>{featured[idx].name}</h3>
          <p>{featured[idx].desc}</p>
        </div>
      </div>
      <button className="carousel-btn right" onClick={next} aria-label="Next">›</button>
      <div className="carousel-dots">
        {featured.map((_, i) => (
          <span key={i} className={i === idx ? "dot active" : "dot"}></span>
        ))}
      </div>
    </div>
  );
}
