import React, { useContext, useEffect } from 'react';
import countries from 'i18n-iso-countries';
import countryJson from 'i18n-iso-countries/langs/en.json';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as R from 'ramda';

import GlobalRankingContext from '../../contexts/globalRankingContext';
import Country from './components/Country'
import * as Styled from './styles';

const Rankings = () => {
    const { globalRanking } = useContext(GlobalRankingContext);
    countries.registerLocale(countryJson);

    return (
        <Styled.RankingsContainer>
            <Styled.TitleContainer>
                <Styled.Title>GLOBAL CASES</Styled.Title>
            </Styled.TitleContainer>
            <Styled.CountriesContainer>
                {(globalRanking.length === 0 || !globalRanking.length)
                    ? <CircularProgress /> 
                    : globalRanking.map(country => {
                        const getCountryName = (name) => {
                            if(name === 'US') return 'USA';
                            if(name === 'IR') return 'IRAN';
                            return countries.getName(name, 'en');
                        }

                        return (
                            <Country 
                                key={country.countryName}
                                countryName={getCountryName(country.countryName)} 
                                casesNumber={country.cases} 
                            />
                        )
                    })
                }
            </Styled.CountriesContainer>
        </Styled.RankingsContainer>
    );
}

export default Rankings;