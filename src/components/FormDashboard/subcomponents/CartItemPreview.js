//CartItemPreview - Jean & Rasmus
export default function CartItemPreview(props) {
  let beerPrice = 0;
  props.prices.map((price) => {
    if (props.beer === price.beername) {
      beerPrice = price.price;
    }
    return beerPrice;
  });
  let totalBeerPrice = beerPrice * props.amount;

  return (
    <div>
      <div className="beer_container_prev">
        <h2 className="small_title_prev">
          {props.amount} X {props.beer}{" "}
        </h2>
        <h2 className="small_title_prev">{totalBeerPrice} KR.</h2>
      </div>
    </div>
  );
}
