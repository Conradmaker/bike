import React, { useEffect } from "react";
const { kakao } = window;
export default function Map() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    var positions = [
      {
        title: "카카오",
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      },
      {
        title: "생태연못",
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ];

    var imageSrc =
      "https://cdn.pixabay.com/photo/2019/10/13/22/00/bike-4547306_640.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(35, 35);

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

      var iwContent = '<div style="padding:30px;">naver.com</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
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
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
}
