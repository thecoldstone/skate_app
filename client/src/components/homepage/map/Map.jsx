import {useRef, useContext} from 'react';
import MapContext from './MapContext';
import mapStyles from './Map.module.css';

function Map() {

    const {map, mapContainer} = useContext(MapContext);

    return (
        <div ref={mapContainer} className={mapStyles.map_container}/>
    );
}

export default Map;