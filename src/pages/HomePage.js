import { products } from "../data";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const checkInCart = (cart, product) => {
  return cart.find((c) => c.id === product.id);
};

const HomePage = () => {
  // reducer
  const dispatch = useCartActions();
  const { cart } = useCart();

  const addToCart = (product) => {
    !checkInCart(cart, product) && toast.success(`${product.name} اضافه شد`);
    dispatch({ type: "ADD_TO_CART", payLoad: product });
  };

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {products.map((p) => {
            return (
              <section className="product" key={p.id}>
                <div className="productImage">
                  <img src={p.image} alt={p.name} />
                  {p.discount > 0 && (
                    <span className="discountTag">
                      {p.discount} % <br /> تخفیف
                    </span>
                  )}
                </div>
                <div className="productDesc">
                  <p className="nameProduct">{p.name}</p>
                  <div className="pricesProduct">
                    {p.discount != 0 && <del>{p.price} تومان</del>}
                    <ins>{p.offPrice} تومان</ins>
                  </div>
                </div>

                {checkInCart(cart, p) ? (
                  <Link className="goToCart" to="/cart">
                    ادامه سفارش
                  </Link>
                ) : (
                  <button onClick={() => addToCart(p)} className="btn primary">
                    اضافه کردن به سبد خرید
                  </button>
                )}
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
