import React, { useState } from 'react';
import { Flex } from 'rebass';
import ReactTooltip from 'react-tooltip';

import MapComponent from './MapComponent';
import Key from './components/Key';
import { MapProvider } from '../../contexts/mapContext';
import ToolTip from './components/ToolTip';

const Map = () => {
    const [toolTipContent, setToolTipContent] = useState({});

    return (
        <MapProvider>
            <Flex alignItems="center" flexDirection="column">
                <Key />
                <MapComponent setToolTipContent={setToolTipContent} />
                <ReactTooltip>
                    {toolTipContent !== ""
                        ? <ToolTip
                            countryName={toolTipContent.countryName}
                            covidData={toolTipContent.covid_data}
                          />
                        : toolTipContent}
                </ReactTooltip>
            </Flex>
        </MapProvider>
    );
}

export default Map