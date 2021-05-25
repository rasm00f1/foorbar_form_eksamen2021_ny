import CartItemPreview from "./CartItemPreview";
import { Link } from "@reach/router";
import Queue from "./Queue";
export default function DataFlow(props) {
  return (
    <div className="row_divider">
      <section className="data_section">
        <h2>Serving</h2>
        <div className="data_container">
          {props.serving.map((customer) => (
            <Queue {...customer} key={customer.id} />
          ))}
        </div>
      </section>
      <section className="data_section">
        <h2>CART</h2>
        <div className="data_container background">
          {props.cartItems.map((item) => (
            <CartItemPreview {...item} key={item.id} prices={props.prices} totalPrice={props.totalPrice} />
          ))}
          <h2>SUBTOTAL: {props.totalPrice} DKK</h2>
          <Link to="/cart">
            <button className="button_blue">CHECKOUT</button>
          </Link>
        </div>
      </section>
      <section className="data_section">
        <h2>Queue</h2>
        <div className="data_container">
          {props.queue.map((customer) => (
            <Queue {...customer} key={customer.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
