import Beer from "./Beer";
import DataFlow from "./DataFlow";
export default function TapList(props) {
  return (
    <main>
      <h2>On Tap</h2>
      <div className="productList">
        {/* Create a Beer component for each of the taps, get send the props it needs to show */}
        {props.taps.map((beer) => (
          <Beer {...beer} beerTypesList={props.beerTypesList} addToCart={props.addToCart} prices={props.prices} key={beer.id} calcTotalPrice={props.calcTotalPrice} />
        ))}
      </div>
      {/* Components that holds Serving, Cart and Queue components, gets send the props it needs to show */}
      <DataFlow orderId={props.orderId} queue={props.queue} serving={props.serving} beerTypesList={props.beerTypesList} cartItems={props.cartItems} prices={props.prices} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice} />
    </main>
  );
}
