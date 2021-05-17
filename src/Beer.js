import { Disclosure } from "@headlessui/react";
import AddButton from "./AddButton";
export default function Beer(props) {
  const styles = {
    boxShadow: "10px 7px 0px #896BFF",
    backgroundColor: "#49494D",
    borderRadius: "10px",
    padding: "1rem",
    minWidth: "100px",
    height: "200px",
    color: "white",
    overflowY: "scroll",
    margin: "0 auto",
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
      <AddButton addToCart={props.addToCart} {...props} />
    </article>
  );
}
