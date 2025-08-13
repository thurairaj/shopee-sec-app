function IsEvenSpecial({ numberValue }) {
  numberValue = numberValue + 3;
  return (
    <h1>
      {numberValue} is {numberValue % 2 === 0 ? "Even" : "Odd"}
    </h1>
  );
}

export default IsEvenSpecial;
