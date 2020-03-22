import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import MapComponent from './MapComponent';

const Map = () => {
    const [toolTipContent, setToolTipContent] = useState("");

    return (
        <div>
            <MapComponent setToolTipContent={setToolTipContent} />
            <ReactTooltip>{toolTipContent}</ReactTooltip>
        </div>
    );
}

export default Map