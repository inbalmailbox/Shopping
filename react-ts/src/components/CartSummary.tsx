import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function CartSummary() {
  const items = useSelector((state: RootState) => state.cart.items);

  if (items.length === 0) {
    return <p>🛒 הסל ריק</p>;
  }

  return (
    <div>
      <h3>🛒 סל קניות</h3>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            {item.name} – {item.quantity} × {item.price} ₪
          </li>
        ))}
      </ul>
    </div>
  );
}
