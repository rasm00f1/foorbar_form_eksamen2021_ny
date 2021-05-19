import OverviewButton from "./OverviewButton";

export default function CartItem(props) {
  let beerimage = "";
  //ForEach beertype in the list check if beer == beerType.name
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerimage = beerType.label;
    }
  });
  return (
    <div>
      <div className="beer_container">
        <button className="close">Close</button>

        <div className="image_container">
          <img src={"./img/" + beerimage} alt="" />
        </div>
        <div className="title_container">
          <div className="beer_header">
            <h2 className="small_title">{props.beer}</h2>
          </div>

          <div className="under_col">
            <h2 className="small_title price">00 KR.</h2>
            <OverviewButton setCartItems={props.setCartItems} {...props} key={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
