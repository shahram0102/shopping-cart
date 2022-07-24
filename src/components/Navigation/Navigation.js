import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import styles from "./navigation.module.css";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className={styles.mainHeader}>
      <nav>
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            {cart.length>0 && (
              <span className={styles.lengthProductInCart}>{cart.length}</span>
            )}
            <Link to="/cart">محصولات</Link>
          </li>
          <li>
            <Link to="/sign-up">ثبت نام</Link>
          </li>
          <li>
            <Link to="/log-in">ورود</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
