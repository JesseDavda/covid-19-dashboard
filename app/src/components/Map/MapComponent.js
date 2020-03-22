import React from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from 'react-simple-maps'

import * as Styled from './styles';

const geoURL = 
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapComponent = ({ setToolTipContent }) => {
    return (
        <Styled.GlobeContainer>
            <ComposableMap 
                projectionConfig={{ scale: 200 }}
                style={{
                    width: '100%',
                    height: '700px',
                }}
                data-tip=""
            >
                <Geographies geography={geoURL}>
                    {({ geographies }) => geographies.map(geo => (
                        <Geography 
                            key={geo.rsmKey}
                            geography={geo}
                            onMouseEnter={() => {
                                const { NAME, POP_EST } = geo.properties;
                                setToolTipContent(`${NAME} — ${POP_EST}`);
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