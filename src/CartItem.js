import OverviewButton from "./OverviewButton";
export default function CartItem(props) {
  let beerimage = "";
  //ForEach beertype in the list check if beer == beerType.name
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerimage = beerType.label;
    }
  });
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
      <div className="beer_container">
        <button className="close">Close</button>

        <div className="image_container">
          <img src={"./img/" + beerimage} alt="" />
        </div>
        <div className="title_container">
          <div className="beer_header">
            <h2 className="small_title">
              {props.amount} X {props.beer}
            </h2>
          </div>

          <div className="under_col">
            <h2 className="small_title price">{totalBeerPrice} KR.</h2>
            <OverviewButton setCartItems={props.setCartItems} {...props} key={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
