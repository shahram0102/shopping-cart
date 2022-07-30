// css
import "./styles/App.css";
// Pages
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/CartPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import NotFound from "./pages/NotFoundPage";

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// React-Route-dom
import { Routes, Route} from "react-router-dom";
import CartProvider from "./Providers/CartProvider";
import CheckOutPage from "./pages/CheckOutPage";
import AuthProvider from "./Providers/AuthProviders";
import ProfilePage from "./pages/Profile";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ProductsPage />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="/check-out" element={<CheckOutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
        </Routes>
        <ToastContainer />
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
