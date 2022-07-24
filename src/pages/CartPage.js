import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";
import { BiTrash } from "react-icons/bi";
import {Link} from "react-router-dom"

const CartPage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  if (!cart.length) {
    return (
      <Layout>
        <main className="container">
          <h2>محصولی در سبد خرید وجود ندارد</h2>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container">
        <section className="cartContainer">
          <div className="cartItemList">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cartItem">
                  <div className="cartImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity} تومان</div>
                  <div className="btnContainer">
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payLoad: item })
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={item.quantity == 1 && "remove"}
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payLoad: item })
                      }
                    >
                      {item.quantity == 1 ? <BiTrash /> : "-"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <CartSummery />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;

const CartSummery = () => {
  const { cart, total } = useCart();
  const priceWithOutDiscount = cart.length
    ? cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    : 0;
  return (
    <div className="cartSummery">
      <h2>اطلاعات سفارش</h2>
      <div className="summeryItem">
        <p>مجموع قیمت</p>
        <p>{priceWithOutDiscount} تومان</p>
      </div>
      <div className="summeryItem">
        <p>مقدار تخفیف</p>
        <p>{priceWithOutDiscount - total} تومان</p>
      </div>
      <hr />
      <div className="summeryItem">
        <p>قیمت نهایی</p>
        <p>{total} تومان</p>
      </div>
      <Link to="/check-out">
        <button className="btnCheckout">ادامه فر آیند سفارش</button>
      </Link>
    </div>
  );
};
