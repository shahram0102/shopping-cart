const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <h1>{product.name}</h1>
      <div>{product.image}</div>
    </div>
  );
};

export default Product;
