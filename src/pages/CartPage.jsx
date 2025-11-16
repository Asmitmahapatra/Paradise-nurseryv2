import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, deleteItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

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
    <div style={{ padding: "40px" }}>
      <h1>Shopping Cart</h1>

      <h3>Total Items: {totalQty}</h3>
      <h3>Total Cost: ${totalCost.toFixed(2)}</h3>

      <Link
        to="/products"
        style={{
          display: "inline-block",
          background: "#28a745",
          color: "white",
          padding: "10px 15px",
          borderRadius: "5px",
          textDecoration: "none",
          marginBottom: "20px",
        }}
      >
        ← Continue Shopping
      </Link>

      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#f9f9f9",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="90"
                style={{ marginRight: "20px", borderRadius: "5px" }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    style={{ padding: "5px 10px", marginRight: "10px" }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    style={{ padding: "5px 10px", marginLeft: "10px" }}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => dispatch(deleteItem(item.id))}
                style={{
                  marginLeft: "20px",
                  background: "red",
                  color: "white",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <button
        style={{
          background: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          marginTop: "20px",
        }}
        onClick={() => alert("Checkout Coming Soon!")}
      >
        Checkout
      </button>
    </div>
  );
}