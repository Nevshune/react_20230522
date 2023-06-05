import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap() {
    useEffect(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
            center: new window.kakao.maps.LatLng(35.9001012, 128.6377214), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };
        const Map = new window.kakao.maps.Map(mapContainer, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(35.9000500, 128.6371800);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(Map)
    }, [])

    return <Box as="div" w="full" h="300px" id="map"></Box>
}