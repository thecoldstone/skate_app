/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import { createContext } from "react";
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

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