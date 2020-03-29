import React from 'react';
import { Flex } from 'rebass';

import * as Styled from './styles';

const Key = () => {
    return (
        <Styled.KeyContainer>
            <Styled.KeyItem>
                <Styled.Colour color='red' />
                <Styled.Label>Fully infected</Styled.Label>
            </Styled.KeyItem>
            <Styled.KeyItem>
                <Styled.Colour color='rgb(0, 0, 0)' />
                <Styled.Label>Fully uninfected</Styled.Label>
            </Styled.KeyItem>
            <Styled.KeyItem>
                <Styled.Colour color='#D6D6DA' />
                <Styled.Label>No Data</Styled.Label>
            </Styled.KeyItem>
        </Styled.KeyContainer>
    );
}

export default Key;