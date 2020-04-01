import React from 'react';

import SiteHeader from '../../components/SiteHeader';
import OverviewHeader from '../../components/OverviewHeader';
import Map from '../../components/Map';
import Rankings from '../../components/Rankings';
import { GlobalRankingProvider } from '../../contexts/globalRankingContext';
import * as Styled from './styles';

const Dashboard = () => {
    return (
        <Styled.Container w={1} flexDirection='column'>
            <SiteHeader />
            <OverviewHeader />
            <Map />
            <GlobalRankingProvider>
                <Rankings />
            </GlobalRankingProvider>
        </Styled.Container>
    );
}

export default Dashboard;