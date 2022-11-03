import React from 'react'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export default function HomeMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD_B-a9TCS1BY1moz56xUU7tVXqCmNqK7g",
    });

    if( !isLoaded ) return <div>Loading...</div>
    return <Map />
    
} 

function Map() {
   return <GoogleMap 
    zoom={15}
    center={{lat: -34.908200806163826, lng: -56.17709298704651}}
    mapContainerClassName="map-container" 
    >
        <MarkerF position={{lat: -34.908200806163826, lng: -56.17709298704651}}/>
    </GoogleMap>
}
