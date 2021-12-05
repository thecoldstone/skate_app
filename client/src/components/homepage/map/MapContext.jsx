/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { createContext } from "react";
import mapboxgl from '!mapbox-gl';

// Accessing env variable
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

/**
 * Holds Map Context
 */
const MapContext = createContext({
    map: "Loading...",
    mapContainer: "Loading...",
    currentState: {
        key: "all",
        setKey: () => {},
        mapData: null,
        setMapData: () => {}
    },
    setCurrentState: () => {}
});

export default MapContext;