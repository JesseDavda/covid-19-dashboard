import React, { createContext, useContext, useState, useEffect } from 'react';

import { CovidDataContext } from './covidDataContext';
import { calculateTopTen } from '../utils/globalRankingUtils';

const GlobalRankingContext = createContext();

export const GlobalRankingProvider = ({ children }) => {
    const { getCountryData } = useContext(CovidDataContext);
    const [globalRankingState, setGlobalRankingState] = useState([]);

    const createRanking = async () => {
        try {
            const rawCountryData = await getCountryData();
            return calculateTopTen(rawCountryData);
        } catch (error) {
            console.log('Create Ranking error: ', error);
            throw new Error(error);
        }
    };

    useEffect(() => {
        createRanking().then(data => {
            setGlobalRankingState(data);
            console.log(globalRankingState);
        });
    }, []);

    return (
        <GlobalRankingContext.Provider
            value={{
                globalRanking: globalRankingState,
            }}
        >
            {children}
        </GlobalRankingContext.Provider>
    );
};

export default GlobalRankingContext;
