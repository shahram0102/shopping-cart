import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import styles from "./navigation.module.css";
import { RiShoppingCart2Line } from "react-icons/ri";

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
            <Link to="/sign-up">ثبت نام / ورود</Link>
          </li>
          <li>
            <Link to="/log-in"></Link>
          </li>
        </ul>

        <div className={styles.rightNav}>
          <div>
            {cart.length > 0 && (
              <span className={styles.lengthProductInCart}>{cart.length}</span>
            )}
            <Link className={styles.containerCartLogo} to="/cart">
              <RiShoppingCart2Line style={{ fontSize: "2rem" }} />
            </Link>
          </div>
          <div>logo</div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
