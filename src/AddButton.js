import { useState } from "react";
export default function AddButton(props) {
  //inline styling for the button container
  const buttonContainer = {
    display: "flex",
    boxShadow: "4px 4px 0px #896BFF",
    borderRadius: "4px",
    width: "8rem",
    justifyContent: "space-between",
    marginTop: "20px",
    marginBottom: "20px",
  };

  //Create stateful variables needed to save the amount of cart items before they get send to cartItems varible
  const [amount, setAmount] = useState(0);
  const [queueCartItems, setQueueCartItems] = useState([]);

  //increaes queued beer amount on + click
  function incClick() {
    setAmount((prevAmount) => prevAmount + 1);
    addToCartQueue(props);
  }

  //decreaes queued beer amount on - click
  function decClick() {
    setAmount((prevAmount) => prevAmount - 1);
    removeFromCartQueue(props);
  }

  //Add an item in queuedCartItems stateful variable, and sets them
  function addToCartQueue(payload) {
    const inCart = queueCartItems.findIndex((item) => item.beer === payload.beer);
    if (inCart === -1) {
      //add
      const nextPayload = { ...payload };
      nextPayload.amount = 1;
      setQueueCartItems((prevState) => [...prevState, nextPayload]);
    } else {
      //it exists, modify amount
      const nextCart = queueCartItems.map((item) => {
        if (item.beer === payload.beer) {
          item.amount += 1;
        }
        return item;
      });
      setQueueCartItems(nextCart);
    }
  }

  //Removes an item in queuedCartItems stateful variable, and sets them
  function removeFromCartQueue(payload) {
    let nextCart = queueCartItems.map((item) => {
      if (item.id === payload.id) {
        item.amount -= 1;
        if (item.amount === 0) {
          console.log("No beers");
        }
      }
      return item;
    });
    setQueueCartItems(nextCart);
  }

  //Called when Add button clicked, adds the curren queuedCartItems to cartItems
  function addToCartForward() {
    console.log(queueCartItems[0]);
    props.setIsOpen(false);

    props.addToCart(queueCartItems[0]);
    props.calcTotalPrice();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={buttonContainer}>
        <button disabled={amount === 0} className="indexButton" onClick={decClick} style={{ borderRadius: "4px 0px 0px 4px" }}>
          -
        </button>
        <p>{amount}</p>
        <button className="indexButton" onClick={incClick} style={{ borderRadius: "0px 4px 4px 0px" }}>
          +
        </button>
      </div>
      <button className="button_blue" disabled={amount === 0} onClick={addToCartForward}>
        Add
      </button>
    </div>
  );
}
