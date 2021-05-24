import OverviewButton from "./OverviewButton";
export default function CartItem(props) {
  let beerimage = "";
  //ForEach beertype in the list check if beer == beerType.name, find the corresponding img
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerimage = beerType.label;
    }
  });
  //ForEach beer on tap check if beer == price.beername, find the corresponding price and set it for each item
  let beerPrice = 0;
  props.prices.map((price) => {
    if (props.beer === price.beername) {
      beerPrice = price.price;
    }
    return beerPrice;
  });
  //Calculate the total price based on amount of beers in the cart
  let totalBeerPrice = beerPrice * props.amount;

  //Removes all beers of one time from cart when close button clicked
  function removedThisArray() {
    const newArray = props.cartItems.filter((item) => {
      if (item.beer === props.beer) {
        return false;
      }
      return true;
    });
    props.setCartItems(newArray);
  }

  return (
    <div>
      <div className="beer_container">
        <button onClick={removedThisArray} className="close">
          Close
        </button>

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
