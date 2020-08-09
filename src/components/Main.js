import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../modules/station";
import styled from "styled-components";
import LIMG from "./assets/Preloader_2.gif";
import Map from "./Map";

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${LIMG});
  background-repeat: no-repeat;
  background-position: center;
`;

async function fetchData() {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/7a4b6e45447968673130384864564f54/json/bikeList/1/1000/"
  );
  return response.data;
}
async function fetchData2() {
  const response = await axios.get(
    "http://openapi.seoul.go.kr:8088/7a4b6e45447968673130384864564f54/json/bikeList/1001/2000/"
  );
  return response.data;
}
export default function Main() {
  const dispatch = useDispatch();
  const { loading, data: list, data2: list2, error } = useSelector(
    (state) => state.station
  );

  useEffect(() => {
    dispatch(getList(fetchData, fetchData2));
  }, [dispatch]);

  if (loading) return <Loading></Loading>;
  if (error) return <div>123123</div>;
  if (!list || !list2) return <div>222</div>;
  const stations = list.rentBikeStatus.row;
  const stations2 = list2.rentBikeStatus.row;
  const stations1 = stations.concat(stations2);
  return (
    <div>
      <Map stations={stations1} />
    </div>
  );
}
