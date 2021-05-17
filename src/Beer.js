import { Disclosure, Dialog, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import AddButton from "./AddButton";
export default function Beer(props) {
  let [isOpen, setIsOpen] = useState(false);

  const styles = {
    padding: "1rem",
    color: "white",
  };

  const stylesImg = {
    boxShadow: "10px 7px 0px #896BFF",
    backgroundColor: "#49494D",
    borderRadius: "10px",
  };

  let beerImg = "";
  let beerAroma = "";
  let beerAppearance = "";
  let beerFlavor = "";
  let beerAlc = "";
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerImg = beerType.label;
      beerAlc = beerType.alc;
      beerAroma = beerType.description.aroma;
      beerAppearance = beerType.description.appearance;
      beerFlavor = beerType.description.flavor;
    }
  });
  return (
    <article style={{ backgroundColor: "black" }} className="no_scroll" style={styles}>
      <img onClick={() => setIsOpen(true)} style={stylesImg} src={"./img/" + beerImg} alt="img" />
      <h3>{props.beer}</h3>

      <h3>{beerAlc}%</h3>

      <Dialog className="dialog" open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay className="modal" />
        <div className="dialog_center">
          <p style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)}>
            X
          </p>
          <Dialog.Title>{props.beer}</Dialog.Title>
          <img style={{ maxWidth: "250px", boxShadow: "10px 7px 0px #896BFF", backgroundColor: "#49494D", borderRadius: "10px" }} src={"./img/" + beerImg} alt="img" />

          <Disclosure>
            <Disclosure.Button className="disclosure_button">AROMA</Disclosure.Button>
            <Disclosure.Panel className="disclosure">
              <Dialog.Description>{beerAroma}</Dialog.Description>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="disclosure_button">APPEARANCE</Disclosure.Button>
            <Disclosure.Panel className="disclosure">
              <Dialog.Description>{beerAppearance}</Dialog.Description>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="disclosure_button">FLAVOR</Disclosure.Button>
            <Disclosure.Panel className="disclosure">
              <Dialog.Description>{beerFlavor}</Dialog.Description>
            </Disclosure.Panel>
          </Disclosure>

          <AddButton addToCart={props.addToCart} {...props} />
        </div>
      </Dialog>
    </article>
  );
}
