import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector(state => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header
      style={{
        padding: "15px 20px",
        background: "#0a4d23",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Paradise Nursery</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/products" style={{ color: "white" }}>Products</Link>
        <Link to="/cart" style={{ color: "white" }}>
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}