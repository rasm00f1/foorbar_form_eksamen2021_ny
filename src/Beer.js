import { Disclosure } from "@headlessui/react";
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
    overflowY: "scroll",
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
    <article className="no_scroll" style={styles}>
      <h3>{props.beer}</h3>
      <img src={"./img/" + beerImg} alt="img" />

      <h3>{beerAlc}%</h3>
      <Disclosure>
        <Disclosure.Button>Mouth Feel</Disclosure.Button>
        <Disclosure.Panel>
          <p>{beerInfo}</p>
        </Disclosure.Panel>
      </Disclosure>
    </article>
  );
}
