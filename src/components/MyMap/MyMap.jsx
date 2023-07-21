import React from 'react';
import './Map.scss';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const MyMap = () => {
  return (
    <YMaps>
      <Map
        className="map"
        defaultState={{
          center: [54.849103237477884, 37.64107726230989],
          zoom: 16,
        }}
      />
    </YMaps>
  );
};

export default MyMap;
