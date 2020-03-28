import React, { useContext } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
} from 'react-simple-maps';

import MapContext from '../../contexts/mapContext';
import * as Styled from './styles';

const MapComponent = ({ setToolTipContent }) => {
    const { geoJson } = useContext(MapContext);

    return (
        <Styled.GlobeContainer>
            <ComposableMap 
                projectionConfig={{ scale: 200 }}
                style={{
                    width: '100%',
                    height: '650px',
                }}
                data-tip=""
            >
                <Geographies geography={geoJson}>
                    {({ geographies }) => geographies.map(geo => (
                        <Geography 
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                const { NAME, COVID } = geo.properties;
                                setToolTipContent({
                                    countryName: NAME,
                                    covid_data: COVID
                                });
                            }}
                            onMouseLeave={() => {
                                setToolTipContent("");
                            }}
                            style={{
                                default: {
                                    fill: "#D6D6DA",
                                    outline: "none"
                                },
                                hover: {
                                    fill: "#e74c3c",
                                    outline: "none"
                                },
                                pressed: {
                                    fill: "#E42",
                                    outline: "none"
                                }
                            }}
                        />
                    ))}
                </Geographies>
            </ComposableMap>
        </Styled.GlobeContainer>
    );
}

export default MapComponent;