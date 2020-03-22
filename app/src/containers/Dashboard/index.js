import React from 'react';

import SiteHeader from '../../components/SiteHeader';
import OverviewHeader from '../../components/OverviewHeader';
import Map from '../../components/Map';
import * as Styled from './styles';

const Dashboard = () => {
    return (
        <Styled.Container w={1} flexDirection='column'>
            <SiteHeader />
            <OverviewHeader />
            <Map />
        </Styled.Container>
    );
}

export default Dashboard;