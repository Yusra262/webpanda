// components/Map.js
'use client'
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map (){
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: 33.684422,
    lng: 73.047882
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD5AClgmp30TdSnwHvQQZM1pU5uVUMB38E"
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

