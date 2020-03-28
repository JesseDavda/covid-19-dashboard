import styled from 'styled-components';
import { Flex } from 'rebass';

export const ToolTipContainer = styled(Flex)`
    width: fit-content;
    height: fit-content;
    box-sizing: border-box;
    flex-direction: column;
    font-family: 'Open-Sans', sans-serif;
    padding: 5px;
`;

export const CountryName = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin: 5px 0px;
`;

export const DataItem = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    margin: 3px 0px;
`;