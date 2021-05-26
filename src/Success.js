import { Link } from "@reach/router";

export default function Success(props) {
  return (
    <section className="success">
      <h1>Payment Successful!</h1>
      <p>
        Your order ID is <span>#{props.orderId}</span> follow your order by going back to menu.
      </p>
      <img src="./icons/check-circle.svg" alt="" className="check_icon" />
      {/* HOW TO BREAK? */}

      <button className="button_blue success_button">
        <Link to="/">Back to Menu</Link>
      </button>
    </section>
  );
}
