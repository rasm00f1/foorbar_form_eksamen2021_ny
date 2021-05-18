import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";
import TapList from "./TapList";
import DataFlow from "./DataFlow";
import { Router, Link } from "@reach/router";

function App() {
  const [tapData, setTapData] = useState([]);
  const [beerTypes, setBeerTypes] = useState([]);
  const [queueData, setQueueData] = useState([]);
  const [servingData, setServingData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(get, []);
  useInterval(get, 5000);
  useEffect(getBeerTypes, []);

  function get() {
    fetch("https://foobar-jearasfix.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        checkQueue(data);
        checkServing(data);
        setTapData(data.taps);
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

  const beerTypesList = [...beerTypes];
  const taps = [...tapData];
  const queue = [...queueData];
  const serving = [...servingData];

  return (
    <div className="App">
      <div className="logo">
        <img src={"./img/foobar_logo.svg"} alt="foobarlogo" />
      </div>
      <TapList taps={taps} beerTypesList={beerTypesList} addToCart={addToCart} />
      <button onClick={post}>POST</button>
      <DataFlow queue={queue} serving={serving} />
    </div>
  );
}

export default App;
