import styled from 'styled-components';
import {Flex} from 'rebass';

export const KeyContainer = styled(Flex)`
    width: 450px;
    height: 35px;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0px 5px;
`;

export const KeyItem = styled(Flex)`
    && {
        align-items: center;
        margin: 0px 10px;
    }
`;

export const Colour = styled.div`
    background-color: ${props => props.color};
    width: 15px;
    height: 15px;
    border: 1px solid #FFFFFF;
`;

export const Label = styled.p`
    font-family: 'Open-Sans', sans-serif;
    font-weight: 700;
    font-size: 11px;
    color: #FFFFFF;
    margin: 0px 5px;
`;