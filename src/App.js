import "./App.css";
import "./Fonts.css";
import "./OverviewOrder.css";

import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";
import TapList from "./TapList";
import CartOverview from "./CartOverview";
import { Router, Link } from "@reach/router";

function App() {
  const [tapData, setTapData] = useState([]);
  const [beerTypes, setBeerTypes] = useState([]);
  const [queueData, setQueueData] = useState([]);
  const [servingData, setServingData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(prices);

  useEffect(get, []);
  useInterval(get, 5000);
  useEffect(getBeerTypes, []);
  useEffect(getPrices, []);
  useInterval(calcTotalPrice, 100);

  function get() {
    fetch("https://foobar-jearasfix.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        checkQueue(data);
        checkServing(data);
        setTapData(data.taps);
      });
  }

  function getPrices() {
    fetch("./beerprice.json")
      .then((res) => res.json())
      .then((data) => {
        setPrices(data);
      });
  }

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
    });
    setCartItems([]);
  }

  function getBeerTypes() {
    fetch("https://foobar-jearasfix.herokuapp.com/beertypes")
      .then((res) => res.json())
      .then((data) => {
        setBeerTypes(data);
      });
  }

  function checkQueue(props) {
    setQueueData(props.queue);
  }

  function checkServing(props) {
    setServingData(props.serving);
  }

  function addToCart(payload) {
    const inCart = cartItems.findIndex((item) => item.id === payload.id);
    if (inCart === -1) {
      //add
      console.log(payload);
      const nextPayload = { ...payload };
      nextPayload.amount = payload.amount;
      setCartItems((prevState) => [...prevState, nextPayload]);
    } else {
      //it exists, modify amount
      const nextCart = cartItems.map((item) => {
        if (item.id === payload.id) {
          item.amount += payload.amount;
        }
        return item;
      });
      setCartItems(nextCart);
    }
  }

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
      <button onClick={post}>POST</button>

      <Router>
        <TapList path="/" queue={queue} serving={serving} prices={prices} taps={taps} beerTypesList={beerTypesList} cartItems={cartItems} addToCart={addToCart} totalPrice={totalPrice} calcTotalPrice={calcTotalPrice} />
        <CartOverview path="/cart" cartItems={cartItems} totalPrice={totalPrice} setCartItems={setCartItems} prices={prices} />
      </Router>
    </div>
  );
}

export default App;
