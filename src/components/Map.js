import React, { useEffect } from "react";
const { kakao } = window;
export default function Map({ stations }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.524, 126.987284),
      level: 8,
    };
    const map = new kakao.maps.Map(container, options);

    let positions = [];
    for (let i = 0; i < stations.length; i++) {
      positions[i] = {
        title: stations[i].stationName,
        latlng: new kakao.maps.LatLng(
          stations[i].stationLatitude,
          stations[i].stationLongitude
        ),
        stationId: stations[i].stationId,
        rackTotCnt: stations[i].rackTotCnt,
        parkingBikeTotCnt: stations[i].parkingBikeTotCnt,
      };
    }
    var imageSrc =
      "https://cdn.pixabay.com/photo/2019/10/13/22/00/bike-4547306_640.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 24);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        clickable: true,
      });

      let iwContent = `<div style="padding:10px;">이름:${positions[i].title} </br> 총거치대:${positions[i].rackTotCnt}</br>이용가능대수:${positions[i].parkingBikeTotCnt} </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      let infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100vw",
        height: "100vh",
      }}
    ></div>
  );
}
