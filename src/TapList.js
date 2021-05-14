import Beer from "./Beer";
export default function TapList(props) {
  return (
    <main>
      <h2>On Tap</h2>
      <div className="productList">
        {props.taps.map((beer) => (
          <Beer {...beer} beerTypesList={props.beerTypesList} key={beer.id} />
        ))}
      </div>
    </main>
  );
}
