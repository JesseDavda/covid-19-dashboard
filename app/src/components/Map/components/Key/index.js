import React from 'react';
import { Flex } from 'rebass';

import * as Styled from './styles';

const Key = () => {
    return (
        <Styled.KeyContainer>
            <Styled.KeyItem>
                <Styled.Colour color='#B3B9D3' />
                <Styled.Label>Fully infected</Styled.Label>
            </Styled.KeyItem>
            <Styled.KeyItem>
                <Styled.Colour color='#171A53' />
                <Styled.Label>Fully uninfected</Styled.Label>
            </Styled.KeyItem>
            <Styled.KeyItem>
                <Styled.Colour color='#718093' />
                <Styled.Label>No Data</Styled.Label>
            </Styled.KeyItem>
        </Styled.KeyContainer>
    );
}

export default Key;