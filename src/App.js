import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./hooks/useInterval";

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
    console.log(props.queue);
    setQueueData(props.queue);
  }

  function checkServing(props) {
    console.log(props.serving);
    setServingData(props.serving);
  }

  function getBeerImg(beer) {
    let beerImg = "";
    beerTypesList.forEach((beerType) => {
      if (beer.beer === beerType.name) {
        console.log(beerType.label);
        beerImg = beerType.label;
      }
    });
    return beerImg;
  }

  const beerTypesList = [...beerTypes];
  const taps = [...tapData];
  const queue = [...queueData];
  const serving = [...servingData];

  return (
    <div className="App">
      <div className="row_divider">
        <ul>
          <h2>Beer Types</h2>
          {beerTypesList.map((beer) => (
            <li key={beer.name}>
              <p>Name: {beer.name}</p>
              <img src={"./img/" + beer.label} alt={beer.name + " img"} />
            </li>
          ))}
        </ul>

        <ul>
          <h2>On Tap</h2>
          {taps.map((beer) => (
            <li key={beer.id}>
              <p>Name: {beer.beer}</p>
              <p>Levels: {beer.level} cL</p>
              {<img src={`./img/${getBeerImg(beer)}`} alt={beer.beer + "img"} />}
            </li>
          ))}
        </ul>
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
