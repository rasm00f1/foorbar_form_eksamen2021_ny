import CartItem from "./CartItem";

//CartOverview - Jean & Rasmus
//Sending cartItems from App.js
export default function CartOverview(props) {
  return (
    <section className="cart">
      {/* Mapping over CartItems */}
      {props.cartItems.map((item) => (
        // Creating a new components for the item
        <CartItem {...item} key={item.id} />
      ))}
    </section>
  );
}
