import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartState = useSelector(state => state.cart);
  const totalItems = cartState.totalQuantity || 0;

  return (
    <header
      style={{
        padding: "15px 30px",
        background: "#0a4d23",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h2 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "700" }}>
          🌿 Paradise Nursery
        </h2>
      </Link>

      <nav style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Link 
          to="/products" 
          style={{ 
            color: "white", 
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "opacity 0.3s ease",
          }}
          onMouseEnter={(e) => e.target.style.opacity = "0.7"}
          onMouseLeave={(e) => e.target.style.opacity = "1"}
        >
          Products
        </Link>
        
        <Link 
          to="/cart" 
          style={{ 
            color: "white",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}