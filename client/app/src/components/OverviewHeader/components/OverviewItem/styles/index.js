import styled from 'styled-components';
import { Flex } from 'rebass';

export const ItemContainer = styled(Flex)`
    && {
        width: 300px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin: 0px 25px;
        flex-wrap: wrap;
        margin-bottom: 50px;
    }
`;

export const ItemTitle = styled.h3`
    font-family: 'Open-sans', sans-serif;
    color: #fff;
    letter-spacing: 5px;
    font-size: 14px;
    margin-bottom: 7px;
`;

export const NumberContainer = styled(Flex)`
    && {
        width: 100%;
        height: 40px;
        background-color: #FFF;
        align-items: center;
        justify-content: center;
        font-family: 'Open-sans', sans-serif;
        font-color: #FFF;
        position: relative;
    }
`;

export const CaseNumber = styled.h4`
    font-family: 'Open-sans', sans-serif;
    color: #000;
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 3px;
    margin: 0px;
`;

export const Icon = styled.img`
    && {
        display: ${props => props.display ? 'inherit' : 'none'};
        position: absolute;
        right: 10px;
        height: 16px;
    }
`;