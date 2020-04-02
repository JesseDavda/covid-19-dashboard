import React, { useContext, useEffect } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
} from 'react-simple-maps';

import MapContext from '../../contexts/mapContext';
import * as MapUtils from './utils';
import * as Styled from './styles';

const percentageColour = (properties, totalCases) => {
    if(properties.COVID && properties.POP_EST) {
        if(properties.COVID !== "No Data") {
            const { COVID, POP_EST } = properties;
            const percentage = (COVID.confirmed / POP_EST) * (totalCases * 0.0005);
            return MapUtils.getColour(percentage > 1 ? 1 : percentage);
        }
    }

    return '#718093';
}

const MapComponent = ({ setToolTipContent }) => {
    const { geoJson, totalCases } = useContext(MapContext);

    useEffect(() => {console.log("geoJson updated")}, [geoJson]);

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
                                    fill: percentageColour(geo.properties, totalCases),
                                    outline: "none"
                                },
                                hover: {
                                    fill: "#e74c3c",
                                    outline: "none"
                                },
                                pressed: {
                                    fill: '#FFFFFF',
                                    outline: "none",
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