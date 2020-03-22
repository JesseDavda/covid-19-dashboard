import React, { useContext } from 'react';
import { CovidDataContext } from '../../contexts/covidDataContext';
import OverviewItem from './components/OverviewItem';

import * as Styled from './styles';

const OverviewHeader = () => {
    const covidDataContext = useContext(CovidDataContext);
    const covidDataObject = covidDataContext.coronaDataObject;
    const covidDailyObject = covidDataContext.coronaDailyObject;

    return(
        <Styled.SecondaryHeaderBar>
            <OverviewItem
                title={"ACTIVE CASES"} 
                number={covidDataObject.totalCases} 
                newCasesNumber={covidDailyObject.activeDelta}
            />
            <OverviewItem 
                title={"DECEASED"}
                number={covidDataObject.totalDeaths} 
            />
            <OverviewItem 
                title={"TOTAL RECOVERED"}
                number={covidDataObject.totalRecovered}
                newCasesNumber={covidDailyObject.recoveredDelta}
            />
        </Styled.SecondaryHeaderBar>
    );
}

export default OverviewHeader;