export default function CartItem(props) {
  let beerimage = "";
  //ForEach beertype in the list check if beer == beerType.name
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerimage = beerType.label;
    }
  });
  return (
    <div className="overview_wrapper">
      <h1>Overview Order</h1>
      <div className="beer_container">
        <h2>{props.beer}</h2>
        <div className="amount">
          <p>{props.amount}</p>
        </div>
      </div>

      <img src={"./img/" + beerimage} alt="" />
    </div>
  );
}
