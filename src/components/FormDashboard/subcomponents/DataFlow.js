import CartItemPreview from "./CartItemPreview";
import { Link } from "@reach/router";
import Queue from "./Queue";
export default function DataFlow(props) {
  return (
    <div className="row_divider">
      <section className="data_section">
        <h2>Queue</h2>
        <div className="data_container">
          {props.queue.map((customer) => (
            <Queue orderId={props.orderId} {...customer} key={customer.id} />
          ))}
        </div>
      </section>
      <section className="data_section">
        <h2>CART</h2>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} className="data_container background">
          {props.cartItems.map((item) => (
            <CartItemPreview {...item} key={item.id} prices={props.prices} totalPrice={props.totalPrice} />
          ))}
          <h2>SUBTOTAL: {props.totalPrice} DKK</h2>
          <Link to="/cart">
            <button disabled={props.cartItems.length === 0} style={props.cartItems.length === 0 ? { cursor: "auto", backgroundColor: "grey", boxShadow: "4px 4px 0px black", opacity: "0.5" } : {}} className="button_blue">
              CHECKOUT
            </button>
          </Link>
        </div>
      </section>
      <section className="data_section">
        <h2>Serving</h2>
        <div className="data_container">
          {props.serving.map((customer) => (
            <Queue orderId={props.orderId} {...customer} key={customer.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
