import CartItem from "./CartItem";
import { Link } from "@reach/router";
// import sameBeerPrice from "./CartItem";

//CartOverview - Jean & Rasmus
//Sending cartItems from App.js
export default function CartOverview(props) {
  //   console.log(sameBeerPrice);

  return (
    <section className="overview_wrapper">
      <div className="overview_box">
        <button className="back_button overview_back">
          <Link to="/" className="link_parent">
            <img src="./icons/left_arrow.svg" alt="" />
            <span>back to overview</span>
          </Link>
        </button>
        <h1 className="overview_h1">Overview Order</h1>
        {/* Mapping over CartItems */}
        {props.cartItems.map((item) => (
          // Creating a new components for the item

          <CartItem
            {...item}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            key={item.id}
            prices={props.prices}
            totalPrice={props.totalPrice}
          />
        ))}
        <div className="subtotal">
          <h3>Subtotal {props.totalPrice} KR.</h3>
        </div>

        <button className="button_blue">
          <Link to="/payment" className="link_parent">
            TO PAYMENT
          </Link>
        </button>
      </div>
    </section>
  );
}
