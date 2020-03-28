import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import MapComponent from './MapComponent';
import { MapProvider } from '../../contexts/mapContext';
import ToolTip from './components/ToolTip';

const Map = () => {
    const [toolTipContent, setToolTipContent] = useState({});

    return (
        <MapProvider>
            <div>
                <MapComponent setToolTipContent={setToolTipContent} />
                <ReactTooltip>
                    {toolTipContent !== ""
                        ? <ToolTip
                            countryName={toolTipContent.countryName}
                            covidData={toolTipContent.covid_data}
                          />
                        : toolTipContent}
                </ReactTooltip>
            </div>
        </MapProvider>
    );
}

export default Map