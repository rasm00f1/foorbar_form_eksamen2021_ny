import { Disclosure, Dialog } from "@headlessui/react";
import { useState } from "react";
import AddButton from "./AddButton";
export default function Beer(props) {
  let [isOpen, setIsOpen] = useState(false);
  //Inline style for the Article elements
  const styles = {
    padding: "1rem",
    color: "white",
  };
  //Inline style for the imgs in taplist
  const stylesImg = {
    boxShadow: "10px 7px 0px #896BFF",
    backgroundColor: "#c4c4c4",
    borderRadius: "10px",
  };

  //Varibles that holds the BeerTypeList data need to show
  let beerImg = "";
  let beerAroma = "";
  let beerAppearance = "";
  let beerFlavor = "";
  let beerAlc = "";
  let beerPrice = 0;

  //Function that sets BeerTypeList variables for each beer in taplist
  props.beerTypesList.forEach((beerType) => {
    if (props.beer === beerType.name) {
      beerImg = beerType.label;
      beerAlc = beerType.alc;
      beerAroma = beerType.description.aroma;
      beerAppearance = beerType.description.appearance;
      beerFlavor = beerType.description.flavor;
    }
  });

  //Function that sets price for each beer in tap list
  props.prices.map((price) => {
    if (props.beer === price.beername) {
      beerPrice = price.price;
    }
    return beerPrice;
  });
  return (
    <article className="no_scroll" style={styles}>
      {/* Click on beer imgs opens modal/dialog */}
      <img onClick={() => setIsOpen(true)} style={stylesImg} src={"./img/" + beerImg} alt="img" />
      <h3>{props.beer}</h3>

      <h3>{beerAlc}%</h3>

      {/* Modal/Dialog for opened on click for each beer */}
      <Dialog className="dialog" open={isOpen} onClose={() => setIsOpen(false)}>
        {/* Background overlay for each modal/dialog */}
        <Dialog.Overlay className="modal" />
        <div className="dialog_center">
          <p className="close_btn" onClick={() => setIsOpen(false)}>
            X
          </p>

          <Dialog.Title>{props.beer}</Dialog.Title>
          <figure style={{ position: "relative" }}>
            <img
              style={{
                maxWidth: "250px",
                boxShadow: "10px 7px 0px #896BFF",
                backgroundColor: "#C4C4C4",
                borderRadius: "10px",
              }}
              src={"./img/" + beerImg}
              alt="img"
            />
            <p className="price">{beerPrice},-</p>
          </figure>
          {/* Disclosures in modal/dialog that holds the beertypelist data */}
          <Disclosure>
            <Disclosure.Button className="disclosure_button">
              AROMA
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M0 0L6.94944 13.0527L13.8989 0L0 0Z" fill="white" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="disclosure">
              <Dialog.Description>{beerAroma}</Dialog.Description>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="disclosure_button">
              APPEARANCE
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M0 0L6.94944 13.0527L13.8989 0L0 0Z" fill="white" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="disclosure">
              <Dialog.Description>{beerAppearance}</Dialog.Description>
            </Disclosure.Panel>
          </Disclosure>

          <Disclosure>
            <Disclosure.Button className="disclosure_button">
              FLAVOR
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M0 0L6.94944 13.0527L13.8989 0L0 0Z" fill="white" />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="disclosure">
              <Dialog.Description>{beerFlavor}</Dialog.Description>
            </Disclosure.Panel>
          </Disclosure>
          {/* Add and remove button, gets sends the props it need for functionality */}
          <AddButton calcTotalPrice={props.calcTotalPrice} setIsOpen={setIsOpen} addToCart={props.addToCart} {...props} />
        </div>
      </Dialog>
    </article>
  );
}
