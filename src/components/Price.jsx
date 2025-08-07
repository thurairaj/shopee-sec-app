import "./Price.css";

function Price({ price }) {
  const formattedPrice = (price / 100).toFixed(2);
  return (
    <>
      <span className={"price"}>RM {formattedPrice}</span>
    </>
  );
}

export default Price;
