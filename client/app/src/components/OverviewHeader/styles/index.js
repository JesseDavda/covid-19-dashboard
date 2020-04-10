import styled from 'styled-components';
import { Flex } from 'rebass';

export const SecondaryHeaderBar = styled(Flex)`
    && {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export const DataItem = styled(Flex)`
    && {
        width: 150px;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const ItemHeader = styled.h5`
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
`;

export const ItemValue = styled.h2`
    font-weight: 700;
    font-size: 22px;
    color: ${props => props.colour};
`;