import React from 'react';

import Logo from '../../assets/Logo';
import * as Styled from './styles';

const SiteHeader = () => {
    return (
        <Styled.SiteHeaderContainer
            alignItems={'center'} 
            justifyContent={'center'}
            flexDirection={'column'}
        >
            <Logo />
            <Styled.SubText>Interactive data mapping to help inform and educate</Styled.SubText>
        </Styled.SiteHeaderContainer>
    )
}

export default SiteHeader;