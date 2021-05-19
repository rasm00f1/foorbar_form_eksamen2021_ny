import AddButton from "./AddButton";

export default function CartItem(props) {
  let beerimage = "";
  //ForEach beertype in the list check if beer == beerType.name
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerimage = beerType.label;
    }
  });

  let beerPrice = 0;
  //TESTING BEER PRICE
  //   props.setTotalPrice((prevState) => [...prevState, beerPrice]);
  //   const testBeerPrice = props.totalPrice.map((price) => {
  //     price += totalBeerPrice;
  //     return price;
  //   });

  props.prices.map((price) => {
    if (props.beer === price.beername) {
      beerPrice = price.price;
    }
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
            <h2 className="small_title price">{totalBeerPrice}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
