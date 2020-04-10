import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { covidCasesEndpoint, countryConfirmedData } from '../utils/endpoints';

export const CovidDataContext = createContext();

export const CovidDataContextProvider = ({ children }) => {
    const [coronaDataObject, setCoronaDataObject] = useState({});
    const [coronaDailyObject, setCoronaDailyObject] = useState({});

    const getCoronaData = async () => {
        try {
            const casesObject = await axios.get('/summary');
            setCoronaDataObject({
                totalCases: casesObject.data.confirmed.value,
                totalDeaths: casesObject.data.deaths.value,
                totalRecovered: casesObject.data.recovered.value
            })
        } catch (err) {
            console.log("There was an error retreiving the case data: ", err);
            throw new Error(err);
        }
    };

    const getDailyCoronaData = async () => {
        try {
            const dailyCasesObject = await axios.get('/daily');
            setCoronaDailyObject({
                activeDelta: dailyCasesObject.data.deltaConfirmed,
                deceasedDelta: dailyCasesObject.data.deltaDeceased
            });
        } catch (err) {
            console.log("There was an error retreiving the daily case data: ", err);
            throw new Errow(err);
        }
    }

    const getCountryData = async () => {
        try {
            const countryData = await axios.get('/country');
            return countryData.data;
        } catch (error) {
            throw new Error(error);
        }
    };

    useEffect(() => {
        getCoronaData();
        getDailyCoronaData();
    }, [])

    return(
        <CovidDataContext.Provider value={{
            coronaDataObject,
            coronaDailyObject,
            getCountryData,
        }}>
            {children}
        </CovidDataContext.Provider>
    )

};