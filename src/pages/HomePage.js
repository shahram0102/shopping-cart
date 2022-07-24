import ProductsList from "../components/Products/ProductList";
import { products } from "../data";
import Layout from "../Layout/Layout";
import { useCartActions } from "../Providers/CartProvider";

const HomePage = () => {
  // reducer
  const dispatch = useCartActions();

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {products.map((p) => {
            return (
              <section className="product" key={p.id}>
                <div className="productImage">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="productDesc">
                  <p>{p.name}</p>
                  <p>{p.price} تومان</p>
                </div>
                <button
                  onClick={() => dispatch({ type: "ADD_TO_CART", payLoad: p })}
                  className="btn primary"
                >
                  اضافه کردن به سبد خرید
                </button>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
