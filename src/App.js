import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((store) => store.cartItem);
  return (
    <>
      <div
        style={{
          marginLeft: "20px",
          width: "95vw",
          margin: "20px auto",
          backgroundColor: "#2874f0",
          padding: "5px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            Home
          </Link>
          <Link
            style={{
              textDecoration: "none",
              marginLeft: "20px",
              color: "#fff",
            }}
            to="/products"
          >
            Products
          </Link>
        </div>

        <Link
          to={"/cart"}
          style={{
            textDecoration: "none",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <AiOutlineShoppingCart /> Cart{cart.length > 0 ? cart.length : ""}
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
