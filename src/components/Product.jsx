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

function Product({ product }) {
  return (
    <div className={"product-container"}>
      <div className={"image-container"}></div>
      <div className={"text-container"}>
        <div>
          <span>{product.name}</span>
        </div>
        <Tags tags={product.tags}></Tags>
        <Price price={product.price}></Price>
      </div>
    </div>
  );
}

export default Product;
