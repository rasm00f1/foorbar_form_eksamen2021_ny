import { useState } from "react";
export default function AddButton(props) {
  const buttonContainer = {
    display: "flex",
    boxShadow: "4px 4px 0px #896BFF",
    borderRadius: "4px",
    width: "8rem",
    justifyContent: "space-between",
  };

  const [amount, setAmount] = useState(0);

  function incClick() {
    console.log(props);
    setAmount((prevAmount) => prevAmount + 1);
    props.addToCart(props);
  }

  return (
    <div style={buttonContainer}>
      <button className="indexButton" style={{ borderRadius: "4px 0px 0px 4px" }}>
        -
      </button>
      <p>{amount}</p>
      <button className="indexButton" onClick={incClick} style={{ borderRadius: "0px 4px 4px 0px" }}>
        +
      </button>
    </div>
  );
}
