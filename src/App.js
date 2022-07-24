// css
import "./App.css";
// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/CartPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// React-Route-dom
import { Routes, Route, Navigate } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ProductsPage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
