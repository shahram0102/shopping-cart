import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles.mainHeader}>
      <nav>
        <ul>
          <li>
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="/products">محصولات</Link>
          </li>
          <li>
            <Link to="/sign-up">ثبت نام</Link>
          </li>
          <li>
            <Link to="/log-in">ورود</Link>
          </li>
        </ul>
        <div>shopping Icon</div>
      </nav>
    </header>
  );
};

export default Navigation;
