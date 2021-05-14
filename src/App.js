import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";
import TapList from "./TapList";

function App() {
  const [tapData, setTapData] = useState([]);
  const [beerTypes, setBeerTypes] = useState([]);
  const [queueData, setQueueData] = useState([]);
  const [servingData, setServingData] = useState([]);

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

  const beerTypesList = [...beerTypes];
  const taps = [...tapData];
  const queue = [...queueData];
  const serving = [...servingData];

  return (
    <div className="App">
      <div className="logo">
        <img src={"./img/foobar_logo.svg"} alt="foobarlogo" />
      </div>
      {/*  <ul>
          <h2>Beer Types</h2>
          {beerTypesList.map((beer) => (
            <li key={beer.name}>
              <p>Name: {beer.name}</p>
              <img src={"./img/" + beer.label} alt={beer.name + " img"} />
            </li>
          ))}
        </ul> */}

      <TapList taps={taps} beerTypesList={beerTypesList} />
      <div className="row_divider">
        <ul>
          <h2>Queue</h2>
          {queue.map((customer) => (
            <li key={customer.id}>
              <p>ID: {customer.id}</p>
              <p>Order Time: {customer.startTime}</p>
              <p>Order: {customer.order}</p>
            </li>
          ))}
        </ul>
        <ul>
          <h2>Serving</h2>
          {serving.map((customer) => (
            <li key={customer.id}>
              <p>ID: {customer.id}</p>
              <p>Order Time: {customer.startTime}</p>
              <p>Order: {customer.order}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
