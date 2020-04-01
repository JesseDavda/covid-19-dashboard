import React from 'react';

import * as Styled from '../../styles';

const numberMask = n =>
    n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const Country = ({ countryName, casesNumber }) => 
    <Styled.CountryContainer>
        <Styled.CountryName>{countryName.toUpperCase()}</Styled.CountryName>
        <Styled.NumberContianer>{numberMask(casesNumber)}</Styled.NumberContianer>
    </Styled.CountryContainer>

export default Country;