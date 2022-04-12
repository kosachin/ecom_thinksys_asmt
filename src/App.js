import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div style={{marginLeft:"20px",width:"95vw",margin:"20px auto", backgroundColor:"#2874f0",padding:"5px"}}>
      <Link style={{ textDecoration: "none",color:"#fff" }} to="/">
        Home
      </Link>
      <Link
        style={{ textDecoration: "none", marginLeft: "20px", color:"#fff" }}
        to="/products"
      >
        Products
      </Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
