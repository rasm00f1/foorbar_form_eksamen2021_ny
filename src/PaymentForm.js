//Payment Component Jean
import { Link } from "@reach/router";

export default function PaymentForm(props) {
  console.log("hello");
  return (
    <form class="form">
      <button class="back_button">
        <Link to="/cart" className="link_parent">
          <svg
            width="27"
            height="42"
            viewBox="0 0 27 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M25 3.75455L21.2082 0L0 21L21.2082 42L25 38.2455L7.58355 21L25 3.75455Z"
                fill="#16ACDA"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="0"
                y="0"
                width="27"
                height="42"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.536922 0 0 0 0 0.421153 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span>back to overview</span>
        </Link>
      </button>
      <fieldset className="form_container">
        <legend>Payment</legend>
        <h2 class="subtotal">
          Subtotal: <span class="totalPrice">{props.totalPrice} KR.</span>
        </h2>
        {/* Card Holder name */}
        <label htmlFor="cardHolderName" class="form_label">
          Card Holder Name
        </label>
        <div>
          <input
            type="text"
            name="cardholdername"
            id="cardHolderName"
            placeholder="Foobar"
            required
          />
        </div>
        {/* Credit Card Number */}
        <label htmlFor="creditCardNumber" class="form_label">
          Credit Card Number
        </label>
        <div>
          <input
            type="text"
            name="creditcardnumber"
            id="creditCardNumber"
            placeholder="1234 1234 1234 1234"
            maxLength="16"
            size="16"
            required
          />
        </div>
        {/* Expire */}
        <label htmlFor="expireDate" class="form_label">
          Expire
        </label>
        <div>
          <input
            type="text"
            name="expire"
            id="expireDate"
            placeholder="MM/YY"
            maxLength="4"
            size="4"
            required
          />
        </div>
        {/* CVV */}
        <label htmlFor="cvv" class="form_label">
          CVV
        </label>
        <div>
          <input
            type="text"
            name="cvv"
            id="cvv"
            placeholder="123"
            maxLength="3"
            size="3"
            required
          />
        </div>
        {/* Terms and Conditions */}
        <p>
          by clicking confirm you agree to foobars
          <span class="terms"> terms and conditions</span>
        </p>
        <button class="button_blue">Confirm & Pay</button>
      </fieldset>
    </form>
  );
}
