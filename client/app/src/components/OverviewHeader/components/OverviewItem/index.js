import React, { useEffect, useState } from 'react';

import * as Styled from './styles';
import RedUpArrow from './assets/arrow-up-red.svg';
import GreenUpArrow from './assets/arrow-up-green.svg';

function numberWithCommas(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
}

const OverviewItem = ({ number, newCasesNumber, title }) => {
    const [ arrowSrc, setArrowSrc ] = useState();

    useEffect(() => {
        if(newCasesNumber) {
            if(title.toUpperCase() !== 'TOTAL RECOVERED') {
                setArrowSrc(newCasesNumber >= 0 ? RedUpArrow : ''); 
            } else {
               setArrowSrc(newCasesNumber >= 0 ? GreenUpArrow : RedUpArrow); 
            }
        } else {
            setArrowSrc(RedUpArrow);
        }
    });

    return (
        <Styled.ItemContainer>
            <Styled.ItemTitle>{title.toUpperCase()}</Styled.ItemTitle>
            <Styled.NumberContainer>
                {title.toUpperCase() !== 'TOTAL RECOVERED' ? (
                    <Styled.CaseNumber>
                        {numberWithCommas(number)} -{' '}
                        {numberWithCommas(newCasesNumber)} new
                    </Styled.CaseNumber>
                ) : (
                    <Styled.CaseNumber>
                        {numberWithCommas(number)}
                    </Styled.CaseNumber>
                )}
                <Styled.Icon
                    src={arrowSrc}
                    alt='?'
                    display={title.toUpperCase() !== 'TOTAL RECOVERED'}
                />
            </Styled.NumberContainer>
        </Styled.ItemContainer>
    );
}

export default OverviewItem;