import { createContext } from "react";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const map = "Loading...";
const mapContainer = "Loading...";

const MapContext = createContext({
    map: map,
    mapContainer: mapContainer
});

export default MapContext;