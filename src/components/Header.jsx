import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartState = useSelector(state => state.cart);
  const totalItems = cartState.totalQuantity || 0;

  return (
    <header className="glass-header">
      <Link to="/" className="header-logo">
        <h2>🌿 Paradise Nursery</h2>
      </Link>
      <nav className="header-nav">
        <Link to="/products" className="header-link">Products</Link>
        <Link to="/cart" className="header-link cart-link">
          🛒 Cart <span className="cart-badge">{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}