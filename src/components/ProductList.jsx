import products from "../data/products.json";
import Product from "./Product.jsx";

function ProductList() {
  return (
    <div className="productList">
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
