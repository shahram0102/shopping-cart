// css
import "./App.css";
// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/CartPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import NotFound from "./pages/NotFoundPage";

// React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-Route-dom
import { Routes, Route, Navigate } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";
import CheckOutPage from "./pages/CheckOutPage";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<ProductsPage />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="/check-out" element={<CheckOutPage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      <ToastContainer />
    </CartProvider>
  );
};

export default App;
