import { useState } from "react";
export default function OverviewButton(props) {
  const buttonContainer = {
    display: "flex",
    boxShadow: "4px 4px 0px #896BFF",
    borderRadius: "4px",
    width: "8rem",
    justifyContent: "space-between",
  };
  console.log(props);

  const [amount, setAmount] = useState(props.amount);

  function incClick() {
    setAmount((prevAmount) => prevAmount + 1);
    addToCart(props);
  }

  function decClick() {
    console.log(amount);
    setAmount((prevAmount) => prevAmount - 1);
    removeFromCart(props);
  }

  function addToCart(payload) {
    const inCart = props.cartItems.findIndex((item) => item.id === payload.id);
    if (inCart === -1) {
      //add
      const nextPayload = { ...payload };
      nextPayload.amount = 1;
      props.setCartItems((prevState) => [...prevState, nextPayload]);
    } else {
      //it exists, modify amount
      const nextCart = props.cartItems.map((item) => {
        if (item.id === payload.id) {
          item.amount += 1;
        }
        return item;
      });
      props.setCartItems(nextCart);
    }
  }

  function removeFromCart(payload) {
    const nextCart = props.cartItems.map((item) => {
      if (item.id === payload.id) {
        item.amount -= 1;
      }
      return item;
    });
    props.setCartItems(nextCart);
    removedItemArray(payload);
  }

  function removedItemArray(payload) {
    if (payload.amount === 1) {
      console.log("no more beers");
      const newArray = props.cartItems.filter((item) => {
        if (item.beer === payload.beer) {
          return false;
        } else return true;
      });
      props.setCartItems(newArray);
    } else {
      console.log("more beers");
    }
  }

  return (
    <div style={{ marginRight: "10px" }}>
      <div style={buttonContainer}>
        <button
          disabled={amount === 0}
          className="indexButton"
          onClick={decClick}
          style={{ borderRadius: "4px 0px 0px 4px" }}
        >
          -
        </button>
        <p>{props.amount}</p>
        <button
          className="indexButton"
          onClick={incClick}
          style={{ borderRadius: "0px 4px 4px 0px" }}
        >
          +
        </button>
      </div>
    </div>
  );
}
