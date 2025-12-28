import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function OrderSummaryPage() {
  const items = useSelector((state: RootState) => state.cart.items);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const submitOrder = async () => {
    await fetch("https://localhost:7233/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer: { fullName, email, address },
        items
      })
    });

    alert("הזמנה נשמרה");
  };

  return (
    <div>
      <input placeholder="שם מלא" onChange={e => setFullName(e.target.value)} />
      <input placeholder="מייל" onChange={e => setEmail(e.target.value)} />
      <input placeholder="כתובת" onChange={e => setAddress(e.target.value)} />

      <ul>
        {items.map(i => (
          <li key={i.productId}>
            {i.name} × {i.quantity}
          </li>
        ))}
      </ul>

      <button onClick={submitOrder}>אשר הזמנה</button>
    </div>
  );
}
