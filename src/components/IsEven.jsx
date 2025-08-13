function IsEven({ numberValue }) {
  return (
    <h1>
      {numberValue} is {numberValue % 2 === 0 ? "Even" : "Odd"}
    </h1>
  );
}

export default IsEven;
