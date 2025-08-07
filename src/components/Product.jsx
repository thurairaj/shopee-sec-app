/*
{
  "name": "120 Speed Fan",
  "tags": ["13% off", "COD"],
  "price": 990,
  "sold": 4300,
  "img": "https://unsplash.com/photos/a-pink-fan-sitting-on-top-of-a-table-ZBa8Jp411kY"

 */

import Tags from "./Tags.jsx";
import Price from "./Price.jsx";
import "./Product.css";

function Product({ product }) {
  return (
    <div className={"product-container"}>
      <div className={"image-container"}>
        <img src={product.img} alt="product" />
      </div>
      <div className={"text-container"}>
        <div>
          <h3 className={"title"}>{product.name}</h3>
        </div>
        <Tags tags={product.tags}></Tags>
        <Price price={product.price}></Price>
      </div>
    </div>
  );
}

export default Product;
