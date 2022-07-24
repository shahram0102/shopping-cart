import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./cartPage.css";

const CartPage = () => {
  const { cart, total } = useCart();
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
                  <div>{item.price * item.quantity} تومان</div>
                  <div>
                    <button
                      onClick={() =>
                        dispatch({ type: "ADD_TO_CART", payLoad: item })
                      }
                    >
                      +
                    </button>
                    <button>{item.quantity}</button>
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payLoad: item })
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cartSummery">
            <p>{total} تومان</p>
            cart summery
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
