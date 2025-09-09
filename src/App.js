import React, { useState } from "react";

// ✅ 20 real products with working images
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2200,
    image: "https://m.media-amazon.com/images/I/71PzXKXjz6L._AC_UL320_.jpg",
  },
  {
    id: 3,
    name: "Laptop Bag",
    price: 999,
    image: "https://m.media-amazon.com/images/I/71T0EgnltuL._AC_UL320_.jpg",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 1799,
    image: "https://m.media-amazon.com/images/I/71cQWYVtcBL._AC_UL320_.jpg",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/71pQ2mS3aYL._AC_UL320_.jpg",
  },
  {
    id: 6,
    name: "Backpack",
    price: 850,
    image: "https://m.media-amazon.com/images/I/81pRpFktR+L._AC_UL320_.jpg",
  },
  {
    id: 7,
    name: "Gaming Mouse",
    price: 1299,
    image: "https://m.media-amazon.com/images/I/61N6uPpGk9L._AC_UL320_.jpg",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/81Ljqh0X8sL._AC_UL320_.jpg",
  },
  {
    id: 9,
    name: "Smartphone",
    price: 12000,
    image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UL320_.jpg",
  },
  {
    id: 10,
    name: "Tablet",
    price: 9999,
    image: "https://m.media-amazon.com/images/I/61f1YfTkFHL._AC_UL320_.jpg",
  },
  {
    id: 11,
    name: "Power Bank",
    price: 1200,
    image: "https://m.media-amazon.com/images/I/71YV7x3PXQL._AC_UL320_.jpg",
  },
  {
    id: 12,
    name: "Digital Camera",
    price: 15000,
    image: "https://m.media-amazon.com/images/I/71n2xvgKnFL._AC_UL320_.jpg",
  },
  {
    id: 13,
    name: "Tripod Stand",
    price: 899,
    image: "https://m.media-amazon.com/images/I/71H7kwIr7+L._AC_UL320_.jpg",
  },
  {
    id: 14,
    name: "Water Bottle",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71S7Q1rZjYL._AC_UL320_.jpg",
  },
  {
    id: 15,
    name: "Sunglasses",
    price: 699,
    image: "https://m.media-amazon.com/images/I/61oKxscgYHL._AC_UL320_.jpg",
  },
  {
    id: 16,
    name: "Wallet",
    price: 450,
    image: "https://m.media-amazon.com/images/I/81FfTMoUPcL._AC_UL320_.jpg",
  },
  {
    id: 17,
    name: "Jeans",
    price: 1100,
    image: "https://m.media-amazon.com/images/I/71z8S-v1qaL._AC_UL320_.jpg",
  },
  {
    id: 18,
    name: "T-Shirt",
    price: 550,
    image: "https://m.media-amazon.com/images/I/71+q-lR50gL._AC_UL320_.jpg",
  },
  {
    id: 19,
    name: "Formal Shirt",
    price: 850,
    image: "https://m.media-amazon.com/images/I/71rnkU93lrL._AC_UL320_.jpg",
  },
  {
    id: 20,
    name: "Winter Jacket",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/71Zzj5AykdL._AC_UL320_.jpg",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((p) => p.id !== product.id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // ✅ Inline CSS styles
  const styles = {
    header: {
      background: "#131921",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    logo: { fontSize: "22px", fontWeight: "bold", color: "orange" },
    searchBar: {
      flex: 1,
      margin: "0 20px",
      display: "flex",
    },
    searchInput: {
      flex: 1,
      padding: "8px",
      border: "none",
      borderRadius: "4px 0 0 4px",
    },
    searchBtn: {
      padding: "8px 15px",
      background: "orange",
      border: "none",
      cursor: "pointer",
      borderRadius: "0 4px 4px 0",
    },
    cartBtn: {
      background: "orange",
      border: "none",
      padding: "8px 15px",
      cursor: "pointer",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    productCard: {
      background: "white",
      padding: "15px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    },
    productImg: {
      maxWidth: "100%",
      height: "150px",
      objectFit: "contain",
    },
    addBtn: {
      marginTop: "10px",
      background: "#f0c14b",
      border: "1px solid #a88734",
      padding: "8px 12px",
      cursor: "pointer",
      borderRadius: "5px",
    },
    cartBox: {
      position: "fixed",
      top: "60px",
      right: "20px",
      width: "300px",
      background: "white",
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
      maxHeight: "400px",
      overflowY: "auto",
    },
    cartItem: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px 0",
    },
    closeBtn: {
      background: "red",
      color: "white",
      padding: "5px 10px",
      border: "none",
      marginBottom: "10px",
      cursor: "pointer",
      borderRadius: "4px",
    },
  };

  return (
    <div style={{ background: "#f3f3f3", minHeight: "100vh" }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Amazon Clone</div>
        <div style={styles.searchBar}>
          <input style={styles.searchInput} placeholder="Search products..." />
          <button style={styles.searchBtn}>🔍</button>
        </div>
        <button style={styles.cartBtn} onClick={() => setShowCart(true)}>
          🛒 Cart ({cart.length})
        </button>
      </header>

      {/* Products */}
      <div style={styles.productGrid}>
        {products.map((p) => (
          <div key={p.id} style={styles.productCard}>
            <img src={p.image} alt={p.name} style={styles.productImg} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button style={styles.addBtn} onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      {showCart && (
        <div style={styles.cartBox}>
          <button style={styles.closeBtn} onClick={() => setShowCart(false)}>
            Close
          </button>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                  <span>
                    {item.name} (x{item.qty})
                  </span>
                  <span>₹{item.price * item.qty}</span>
                  <button onClick={() => removeFromCart(item)}>❌</button>
                </div>
              ))}
              <h3>Total: ₹{total}</h3>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
