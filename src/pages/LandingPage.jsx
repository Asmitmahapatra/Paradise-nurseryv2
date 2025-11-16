import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1 className="title">Paradise Nursery</h1>
        <p className="description">
          Welcome to Paradise Nursery! We offer a curated selection of beautiful
          and healthy houseplants to bring life and freshness into your home.
        </p>

        <Link to="/products">
          <button className="start-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}