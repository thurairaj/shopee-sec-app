function Click({ clicks, setClicks }) {
  function onClickHandler() {
    setClicks((prev) => prev + 1);
    setClicks((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={onClickHandler}>Click Me!</button>
    </>
  );
}

export default Click;
