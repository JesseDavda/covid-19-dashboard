import React, { useState } from 'react';
import { Flex } from 'rebass';
import ReactTooltip from 'react-tooltip';

import MapComponent from './MapComponent';
import Key from './components/Key';
import { MapProvider } from '../../contexts/mapContext';
import ToolTip from './components/ToolTip';

const Map = () => {
    const [toolTipContent, setToolTipContent] = useState('');

    return (
        <MapProvider>
            <Flex alignItems='center' flexDirection='column'>
                <MapComponent setToolTipContent={setToolTipContent} />
                <ReactTooltip backgroundColor={'rgba(0, 0, 0, 0.6)'}>
                    {toolTipContent !== '' ? (
                        <ToolTip
                            countryName={toolTipContent.countryName}
                            covidData={toolTipContent.covid_data}
                        />
                    ) : (
                        toolTipContent
                    )}
                </ReactTooltip>
                <Key />
            </Flex>
        </MapProvider>
    );
}

export default Map