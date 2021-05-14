export default function Beer(props) {
  const styles = {
    boxShadow: "2px 2px 10px rgb(30, 180, 228, 0.50)",
    backgroundColor: "#343434",
    borderRadius: "4px",
    border: "5px solid #16ACDA",
    padding: "1rem",
    maxWidth: "300px",
    height: "550px",
    color: "white",
  };

  let beerImg = "";
  let beerInfo = "";
  let beerAlc = "";
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerImg = beerType.label;
      beerAlc = beerType.alc;
      beerInfo = beerType.description.overallImpression;
    }
  });
  return (
    <article style={styles}>
      <h3>{props.beer}</h3>
      <img src={"./img/" + beerImg} alt="img" />
      <div className="row_divider">
        <p>{beerInfo}</p>

        <h3>{beerAlc}%</h3>
      </div>
    </article>
  );
}
