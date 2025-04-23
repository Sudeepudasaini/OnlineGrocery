import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 28.6139, // Default to New Delhi
  lng: 77.2090
};

const MapComponent = () => {
  const [mapCenter, setMapCenter] = useState(center);
  const [markerPosition, setMarkerPosition] = useState(center);
  const [address, setAddress] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const current = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      setMapCenter(current);
      setMarkerPosition(current);
      getAddress(current);
    });
  }, []);

  const getAddress = async (coords) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=YOUR_API_KEY`;
    const response = await fetch(geocodeUrl);
    const data = await response.json();
    if (data.results.length > 0) {
      setAddress(data.results[0].formatted_address);
    }
  };

  const handleMapClick = (event) => {
    const coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setMarkerPosition(coords);
    getAddress(coords);
  };

  return (
    <div>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={15}
          onClick={handleMapClick}
        >
          <Marker position={markerPosition} />
        </GoogleMap>
      </LoadScript>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default MapComponent;
