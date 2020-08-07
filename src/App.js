import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "./modules/station";
import { Map, Marker, MarkerClusterer, Polyline } from "react-kakao-maps";
async function fetchData() {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/7856574d457968673934516650706d/json/bikeList/1/1000/"
  );
  return response.data;
}
function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.station);

  useEffect(() => {
    dispatch(getList(fetchData));
  }, [dispatch]);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
