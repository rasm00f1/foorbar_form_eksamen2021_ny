//Payment Component Jean
import Success from "./Success";

import { Link } from "@reach/router";
import { useState, useEffect, useRef } from "react";
import InputMask from "react-input-mask";
import ReactCardFlip from "react-card-flip";
import { Input } from "antd";

//https://codesandbox.io/s/antd-forked-nsp0e?file=/src/App.js - Form Validation
export default function PaymentForm(props) {
  const [name, setName] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [monthYear, setMonthYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useRef(null);

  useEffect(() => {
    const isCreditCardValid = cardnumber.replaceAll(" ", "").length === 16;
    const isMonthYearValid = monthYear.replace("/", "").length === 4;
    const isCvvValid = cvv.length === 3;
    setIsValid(form.current.checkValidity() && isMonthYearValid && isCreditCardValid && isCvvValid);
  }, [name, cardnumber, monthYear]);

  function onSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
  }

  return (
    <ReactCardFlip isFlipped={submitted}>
      <form className="form" onSubmit={onSubmit} ref={form}>
        <button className="back_button">
          <Link to="/cart" className="link_parent">
            <img src="./icons/left_arrow.svg" alt="" />
            <span>back to overview</span>
          </Link>
        </button>
        <fieldset className="form_container">
          <legend>Payment</legend>
          <h2 className="subtotal">
            Subtotal: <span className="totalPrice">{props.totalPrice} KR.</span>
          </h2>
          {/* Card Holder name */}
          <label htmlFor="name" className="form_label">
            Card Holder Name
          </label>
          <div>
            <Input id="name" type="text" required minLength="2" value={name} onChange={(e) => setName(e.target.value)} placeholder="Foobar" />
          </div>
          {/* Credit Card Number */}
          <label htmlFor="cardnumber" className="form_label">
            Credit Card Number
          </label>
          <div>
            <InputMask mask="9999 9999 9999 9999" value={cardnumber} maskChar="" className="ant-input" onChange={(e) => setCardnumber(e.target.value)} required placeholder="1234 1234 1234 1234" />
          </div>
          {/* Expire */}
          <label htmlFor="expireDate" className="form_label">
            Expire
          </label>
          <label htmlFor="monthyear" className="form_label">
            Month/Year
          </label>
          <div>
            <InputMask mask="99/99" maskChar="" className="ant-input" required value={monthYear} onChange={(e) => setMonthYear(e.target.value)} minLength="17" placeholder="01/02" />
          </div>
          {/* CVV */}
          <label htmlFor="cvv" className="form_label">
            CVV
          </label>
          <div>
            <InputMask mask="999" maskChar="" className="ant-input" required value={cvv} onChange={(e) => setCvv(e.target.value)} minLength="17" placeholder="123" />
          </div>
          {/* Terms and Conditions */}
          <p>
            by clicking confirm you agree to foobars
            <span className="terms"> terms and conditions</span>
          </p>
          <button className="button_blue" onClick={props.post} disabled={!isValid} style={!isValid ? { cursor: "auto", backgroundColor: "grey", boxShadow: "4px 4px 0px black", opacity: "0.5" } : {}}>
            Confirm & Pay
          </button>
        </fieldset>
      </form>

      <Success orderId={props.orderId} />
    </ReactCardFlip>
  );
}
