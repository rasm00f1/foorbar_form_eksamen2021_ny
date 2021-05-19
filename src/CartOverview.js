import CartItem from "./CartItem";
import { useState } from "react";
// import sameBeerPrice from "./CartItem";

//CartOverview - Jean & Rasmus
//Sending cartItems from App.js
export default function CartOverview(props) {
  //   console.log(sameBeerPrice);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <section className="overview_wrapper">
      <button className="backMenu">BACK TO MENU</button>
      <h1 className="overview_h1">Overview Order</h1>
      {/* Mapping over CartItems */}
      {props.cartItems.map((item) => (
        // Creating a new components for the item
        <CartItem
          {...item}
          key={item.id}
          prices={props.prices}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      ))}
      <div className="subtotal">
        <h3>Subtotal {totalPrice} KR.</h3>
      </div>
      <button>TO CHECKOUT</button>
    </section>
  );
}
