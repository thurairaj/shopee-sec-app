import products from "../data/products.json";
import Product from "./Product.jsx";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
