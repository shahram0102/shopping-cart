import { products } from "../../data";
import Product from "./Product/Product";

console.log(products);

const ProductsList = () => {
  return (
    <section>
      <h3>hi</h3>
      {products.map((p) => {
        <p>{p.name}</p>;
        //   <Product key={p.id} product={p} />;
      })}
    </section>
  );
};

export default ProductsList;
