import React, { useContext, useEffect } from 'react';
import countries from 'i18n-iso-countries';
import countryJson from 'i18n-iso-countries/langs/en.json';
import CircularProgress from '@material-ui/core/CircularProgress';

import GlobalRankingContext from '../../contexts/globalRankingContext';
import Country from './components/Country'
import * as Styled from './styles';

const Rankings = () => {
    const { globalRanking } = useContext(GlobalRankingContext);
    countries.registerLocale(countryJson);

    useEffect(() => {
        console.log("The ranking: ", globalRanking);
        console.log("true false, ", globalRanking.length === 0 || !globalRanking.length);
        console.log("Global ranking updated");
    }, [globalRanking]);

    return (
        <Styled.RankingsContainer>
            <Styled.TitleContainer>
                <Styled.Title>GLOBAL CASES</Styled.Title>
            </Styled.TitleContainer>
            <Styled.CountriesContainer>
                {(globalRanking.length === 0 || !globalRanking.length)
                    ? <CircularProgress /> 
                    : globalRanking.map(country => {
                        console.log(country.countryName);
                        const countryName = countries.getName(country.countryName, "en");
                        console.log(countryName);
                        return (
                            <Country 
                                key={country.countryName}
                                countryName={countryName} 
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