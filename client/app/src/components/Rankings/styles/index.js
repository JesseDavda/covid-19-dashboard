import styled from 'styled-components';
import { Flex } from 'rebass';

export const RankingsContainer = styled(Flex)`
    width: 265px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
`;

export const TitleContainer = styled(Flex)`
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    font-family: 'Open-Sans', sans-serif;
    letter-spacing: 4px;
    font-weight: 300;
    color: #FFFFFF;
    font-size: 16px;
    margin: 5px 10px;
`;

export const CountriesContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    min-height: 400px;
    height: fit-content;
    padding-top: 5px;
`;

export const CountryContainer = styled(Flex)`
    width: 100%;
    height: 40px;
    margin-bottom: 5px !important;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 95px;
`;

export const CountryName = styled.h4`
    color: #FFF;
    font-weight: 300;
    font-size: 12px;
    font-family: 'Open-Sans', sans-serif;
    letter-spacing: 3px;
`;

export const NumberContianer = styled(Flex)`
    width: 80px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: rgba(151, 151, 151, 0.8);
    position: absolute;
    right: 5px;
    font-family: 'Open-Sans', sans-serif;
    font-size: 12px;
    letter-spacing: 3px;
    color: #FFF;
`;