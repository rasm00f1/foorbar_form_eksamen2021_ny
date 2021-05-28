import "./App.css";
import "./Fonts.css";
import "./OverviewOrder.css";
import "./Form.css";

import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";
import TapList from "./components/Taplist/TapList";
import CartOverview from "./components/CartOverview/CartOverview";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import { Router, Link } from "@reach/router";

function App() {
  //Create stateful variables
  const [orderId, setOrderId] = useState("");
  const [tapData, setTapData] = useState([]);
  const [beerTypes, setBeerTypes] = useState([]);
  const [queueData, setQueueData] = useState([]);
  const [servingData, setServingData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //Call function that need to be called once, and some with an interval
  useEffect(get, []);
  useInterval(get, 5000);
  useEffect(getBeerTypes, []);
  useEffect(getPrices, []);
  useInterval(calcTotalPrice, 100);

  //Fetching main data from database and call functions
  //Called every 5s
  function get() {
    fetch("https://foobar-jearasfix.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        checkQueue(data);
        checkServing(data);
        setTapData(data.taps);
      });
  }

  //Fetch prices data
  function getPrices() {
    fetch("./beerprice.json")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data);
      });
  }

  //Post order to database
  function post() {
    const data = cartItems.map((item) => {
      return { name: item.beer, amount: item.amount };
    });
    console.log(data);
    const postData = JSON.stringify(data);
    fetch("https://foobar-jearasfix.herokuapp.com/order", {
      method: "post",
      body: postData,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((dataobj) => setOrderId(dataobj.id));
    setCartItems([]);
  }

  //Fectches beertype data, to be used and set the stateful variable
  function getBeerTypes() {
    fetch("https://foobar-jearasfix.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });
  }

  //Sets queue data every 5s
  function checkQueue(props) {
    setQueueData(props.queue);
  }

  //Sets serving data every 5s
  function checkServing(props) {
    setServingData(props.serving);
  }

  //Sets cart cartitems to current items chosen in singleview
  function addToCart(payload) {
    const inCart = cartItems.findIndex((item) => item.beer === payload.beer);
    if (inCart === -1) {
      //add
      console.log(payload);
      const nextPayload = { ...payload };
      nextPayload.amount = payload.amount;
      setCartItems((prevState) => [...prevState, nextPayload]);
    } else {
      //it exists, modify amount
      const nextCart = cartItems.map((item) => {
        if (item.beer === payload.beer) {
          item.amount += payload.amount;
        }
        return item;
      });
      setCartItems(nextCart);
    }
  }

  //Calculates the subtotal price of beers in cart, sets price to this amount
  //Get called every .1s
  function calcTotalPrice() {
    let totalPricePrev = 0;
    cartItems.forEach((item) => {
      prices.forEach((price) => {
        if (price.beername === item.beer) {
          totalPricePrev += item.amount * price.price;
        }
      });
    });
    setTotalPrice(totalPricePrev);
  }

  //Copies data to be updated every 5s, so it dosen't create infinite rerendering
  const beerTypesList = [...beerTypes];
  const taps = [...tapData];
  const queue = [...queueData];
  const serving = [...servingData];

  return (
    <div className="App">
      <div className="logo">
        <Link to="/">
          <img src={"./img/foobar_logo.svg"} alt="foobarlogo" />
        </Link>
      </div>

      {/* Wrap components in Router to be able to only render 1 component at a time */}
      <Router>
        {/* Main view and Cartoverview, gets send the props it needs for functionality */}
        <TapList path="/" orderId={orderId} queue={queue} serving={serving} prices={prices} taps={taps} beerTypesList={beerTypesList} cartItems={cartItems} addToCart={addToCart} totalPrice={totalPrice} calcTotalPrice={calcTotalPrice} />
        <CartOverview path="/cart" cartItems={cartItems} totalPrice={totalPrice} setCartItems={setCartItems} prices={prices} />
        <PaymentForm path="/payment" orderId={orderId} cartItems={cartItems} totalPrice={totalPrice} post={post} />
      </Router>
    </div>
  );
}

export default App;
