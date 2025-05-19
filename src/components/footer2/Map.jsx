import React from 'react';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";


const YMap = () => {
    return (
            <YMaps>
                    <Map style={{height: '200px'}} defaultState={{ center: [58.001669, 56.261908], zoom: 12 }} >
                        <Placemark
                            geometry={[58.001669, 56.261908]}
                            options={{
                                preset: 'islands#redDotIcon',
                            }}
                            properties={{
                                iconContent: '34dfdgrgdfgdfg',
                            }}
                        />
                    </Map>
            </YMaps>
    );
};

export default YMap;