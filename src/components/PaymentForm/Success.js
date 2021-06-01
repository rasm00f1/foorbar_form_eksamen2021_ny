import { Link } from "@reach/router";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Success(props) {
  return (
    <section className="success">
      <h1>Payment Successful!</h1>

      {props.orderId === "" ? (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <p className="order_p">Getting your order ID: </p>
          <Loader type="Watch" color="#76deff" width={25} height={25} style={{ margin: "0 10px" }} />
        </div>
      ) : (
        <p className="order_p">
          Your order number is <span>#{props.orderId}</span> follow your order by going back to menu.
        </p>
      )}
      <img src="./icons/check-circle.svg" alt="" className="check_icon" />
      {/* HOW TO BREAK? */}

      <button className="button_blue success_button">
        <Link to="/">Back to Menu</Link>
      </button>
    </section>
  );
}
