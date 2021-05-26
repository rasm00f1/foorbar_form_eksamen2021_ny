import CartItem from "./CartItem";
import { Link } from "@reach/router";
// import sameBeerPrice from "./CartItem";

//CartOverview - Jean & Rasmus
//Sending cartItems from App.js
export default function CartOverview(props) {
  //   console.log(sameBeerPrice);

  return (
    <section className="overview_wrapper">
      <button className="back_button overview_back">
        <Link to="/" className="link_parent">
          <img src="./icons/left_arrow.svg" alt="" />
          <span>back to overview</span>
        </Link>
      </button>
      <div className="overview_box">
        <h1 className="overview_h1">Overview Order</h1>
        {/* Mapping over CartItems */}
        {props.cartItems.map((item) => (
          // Creating a new components for the item

          <CartItem {...item} cartItems={props.cartItems} setCartItems={props.setCartItems} key={item.id} prices={props.prices} totalPrice={props.totalPrice} />
        ))}
        <div className="overview_subtotal">
          <h3>Subtotal {props.totalPrice} KR.</h3>
        </div>
        {props.cartItems.length === 0 ? (
          <h3>Your cart is empty.</h3>
        ) : (
          <button disabled={props.cartItems.length === 0} style={props.cartItems.length === 0 ? { cursor: "auto", backgroundColor: "grey", boxShadow: "4px 4px 0px black", opacity: "0.5" } : {}} className="button_blue payment_button">
            <Link to="/payment" className="link_parent">
              TO PAYMENT
            </Link>
          </button>
        )}
      </div>
    </section>
  );
}
