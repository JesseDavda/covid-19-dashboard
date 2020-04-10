import React from 'react';

import logoImage from './c19-logo.svg';
import * as Styled from './styles';

const Logo = () => (
    <Styled.StyledImage src={logoImage} alt="logo"/>
);

export default Logo;