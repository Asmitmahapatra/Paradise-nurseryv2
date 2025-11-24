
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { useEffect, useState } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";

export default function LandingPage() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div className="landing-container">
      <div className={`overlay hero-animate${show ? " hero-animate-in" : ""}`}>
        <h1 className="title">Paradise Nursery</h1>
        <p className="description">
          Welcome to Paradise Nursery! We offer a curated selection of beautiful
          and healthy houseplants to bring life and freshness into your home.
        </p>
        <Link to="/products">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
      <FeaturedCarousel />
    </div>
  );
}