'use client';

import { useEffect, useState } from 'react';
import styles from './kakaoMap.module.css';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';

type KakaoGeocoderResult = {
    address_name: string;
    x: string;
    y: string;
};

type KakaoGeocoderStatus = 'OK' | 'ZERO_RESULT' | 'ERROR';

interface KakaoMapProps {
    initialAddress?: string;
    readOnly?: boolean;
    onAddressChange?: (address: string) => void;
}

declare const window: Window & {
    kakao: any;
};

const appKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

export default function KakaoMap({
    initialAddress = '',
    readOnly = false,
    onAddressChange,
}: KakaoMapProps) {
    const [currentAddress, setCurrentAddress] = useState(initialAddress);
    const openPostcode = useDaumPostcodePopup();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`;
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                if (!container) return;

                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                };
                const map = new window.kakao.maps.Map(container, options);

                if (currentAddress) {
                    updateMapWithAddress(map, currentAddress);
                }
            });
        };

        return () => {
            script.remove();
        };
    }, [currentAddress]);

    const updateMapWithAddress = (map: any, address: string) => {
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
            address,
            (result: KakaoGeocoderResult[], status: KakaoGeocoderStatus) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    const coords = new window.kakao.maps.LatLng(
                        parseFloat(result[0].y),
                        parseFloat(result[0].x)
                    );
                    map.setCenter(coords);

                    new window.kakao.maps.Marker({
                        position: coords,
                        map: map,
                    });
                } else {
                    console.error('좌표 변환 실패:', status);
                }
            }
        );
    };

    const handlePostCodeSearch = () => {
        openPostcode({
            onComplete: (data: Address) => {
                const fullAddress = data.address;
                setCurrentAddress(fullAddress);
                onAddressChange?.(fullAddress); // 부모 컴포넌트에 전달
            },
        });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>거래 위치</div>

                <div className={styles.mapContainer}>
                    <div id="map" className={styles.map}></div>
                </div>
                {!readOnly && (
                    <div className={styles.controls}>
                        <button
                            className={styles.searchButton}
                            onClick={handlePostCodeSearch}
                        >
                            주소 검색
                        </button>
                        <div className={styles.addressDisplay}>
                            <p>
                                검색된 주소:{' '}
                                {currentAddress || '주소를 검색해주세요.'}
                            </p>
                        </div>
                    </div>
                )}
                {readOnly && (
                    <div className={styles.readOnlyAddress}>
                        <p>
                            주소: {currentAddress || '등록된 주소가 없습니다.'}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
