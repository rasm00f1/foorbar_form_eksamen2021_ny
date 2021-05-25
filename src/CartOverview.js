import CartItem from "./CartItem";
// import sameBeerPrice from "./CartItem";

//CartOverview - Jean & Rasmus
//Sending cartItems from App.js
export default function CartOverview(props) {
  //   console.log(sameBeerPrice);

  return (
    <section className="overview_wrapper">
      <div className="overview_box">
        <button className="backMenu">BACK TO MENU</button>
        <h1 className="overview_h1">Overview Order</h1>
        {/* Mapping over CartItems */}
        {props.cartItems.map((item) => (
          // Creating a new components for the item

          <CartItem {...item} cartItems={props.cartItems} setCartItems={props.setCartItems} key={item.id} prices={props.prices} totalPrice={props.totalPrice} />
        ))}
        <div className="subtotal">
          <h3>Subtotal {props.totalPrice} KR.</h3>
        </div>
        <button className="button_blue">TO CHECKOUT</button>
      </div>
    </section>
  );
}
