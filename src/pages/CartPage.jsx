import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, deleteItem } from "../store/cartSlice";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);

  // SAFETY CHECK (prevents blank screen)
  if (!cartState || !cartState.items) {
    return <h1>Cart is not ready...</h1>;
  }

  const items = cartState.items;
  const totalQty = cartState.totalQuantity;

  const cartItems = Object.values(items);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>🛒 Shopping Cart</h1>

      <div className="cart-summary">
        <h3>Total Items: {totalQty}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
      </div>

      <Link to="/products" className="continue-shopping-btn">
        ← Continue Shopping
      </Link>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Start shopping to add items!</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    −
                  </button>

                  <span className="qty-display">{item.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                className="delete-btn"
                onClick={() => {
                  if (window.confirm(`Remove ${item.name} from cart?`)) {
                    dispatch(deleteItem(item.id));
                  }
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <button
          className="checkout-btn"
          style={{
            background: "#0a4d23",
            color: "white",
            padding: "14px 28px",
            borderRadius: "6px",
            marginTop: "30px",
            fontSize: "1.1rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            width: "100%",
            maxWidth: "300px",
            display: "block",
            margin: "30px auto 0",
          }}
          onClick={() => alert("Checkout Coming Soon!")}
          onMouseEnter={(e) => e.target.style.background = "#073620"}
          onMouseLeave={(e) => e.target.style.background = "#0a4d23"}
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}