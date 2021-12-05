/**
 * Author: Nikita Zhukov <xzhuko01@stud.fit.vutbr.cz>
 */

import React, {useRef, useContext} from 'react';
import MapContext from './MapContext';
import mapStyles from './Map.module.css';

/**
 * Map Component
 * 
 * @returns {React.FC}
 */
function Map() {

    const {map, mapContainer} = useContext(MapContext);

    return (
        <div ref={mapContainer} className={mapStyles.map_container}/>
    );
}

export default Map;