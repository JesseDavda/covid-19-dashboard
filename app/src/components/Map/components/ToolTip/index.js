import React from 'react';

import * as Styled from './styles';
import { NumberMask } from './utils/numberMask';

const ToolTip = ({
    countryName,
    covidData
}) => {
    if(!covidData) {
        return ""
    }

    return (
        <Styled.ToolTipContainer>
            <Styled.CountryName>{countryName}</Styled.CountryName>
            <Styled.DataItem>Confirmed cases:&nbsp;
                {covidData.confirmed
                    ? NumberMask(covidData.confirmed)
                    : 'No data found'}
            </Styled.DataItem>
            <Styled.DataItem>
                Recovered:&nbsp;
                {covidData.recovered
                    ? NumberMask(covidData.recovered)
                    : 'No data found'}
            </Styled.DataItem>
            <Styled.DataItem>
                Deaths:&nbsp;
                {covidData.deaths
                    ? NumberMask(covidData.deaths)
                    : 'No data found'}
            </Styled.DataItem>
            <Styled.DataItem>
                Active cases:&nbsp;
                {covidData.active
                    ? NumberMask(covidData.active)
                    : 'No data found'}
            </Styled.DataItem>
        </Styled.ToolTipContainer>
    );
}

export default ToolTip;