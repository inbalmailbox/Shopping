import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import CartSummary from "../components/CartSummary";
import {
  getCategories,
  getProductsByCategory,
  type Category,
  type Product,
} from "../api/categoriesApi";

export default function ProductsPage() {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "">("");
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const onCategoryChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(e.target.value);
    setSelectedCategoryId(id);
    const data = await getProductsByCategory(id);
    setProducts(data);
  };

  const onAddProduct = () => {
    if (!productName || !selectedCategoryId) return;

    dispatch(
      addToCart({
        productId: Date.now(),
        name: productName,
        quantity: 1,
        categoryId: selectedCategoryId,
      })
    );

    setProductName("");
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        direction: "rtl",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>הוספת מוצר</h2>

      <div style={{ display: "flex", gap: 10, marginBottom: 15 }}>
        <input
          placeholder="שם המוצר"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <select
          value={selectedCategoryId}
          onChange={onCategoryChange}
          style={{
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
            minWidth: 160,
          }}
        >
          <option value="">בחר קטגוריה</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={onAddProduct}
        style={{
          padding: "10px 20px",
          borderRadius: 8,
          border: "none",
          background: "#f3f3f3",
          cursor: "pointer",
          marginBottom: 30,
        }}
      >
        הוסף מוצר
      </button>

      <h3 style={{ marginBottom: 10 }}>מוצרים</h3>
      <div style={{ marginBottom: 30 }}>
        {products.length === 0 && <div>אין מוצרים להצגה</div>}
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span>{p.name}</span>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    productId: p.id,
                    name: p.name,
                    quantity: 1,
                    categoryId: selectedCategoryId,
                  })
                )
              }
              style={{
                background: "none",
                border: "none",
                color: "#0077cc",
                cursor: "pointer",
              }}
            >
              הוסף לסל
            </button>
          </div>
        ))}
      </div>

      <CartSummary />

      <button
        style={{
          marginTop: 20,
          padding: "12px 30px",
          borderRadius: 10,
          border: "none",
          background: "#f3f3f3",
          cursor: "pointer",
        }}
      >
        המשך להזמנה
      </button>
    </div>
  );
}
