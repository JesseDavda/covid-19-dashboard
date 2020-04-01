import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import * as R from 'ramda';

import { covidCasesEndpoint, countryConfirmedData } from '../utils/endpoints';

export const CovidDataContext = createContext();

export const CovidDataContextProvider = ({ children }) => {
    const [coronaDataObject, setCoronaDataObject] = useState({});
    const [coronaDailyObject, setCoronaDailyObject] = useState({});

    const getCoronaData = async () => {
        try {
            const casesObject = await axios.get(covidCasesEndpoint);
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
            const dailyCasesObject = await axios.get('https://covid19.mathdro.id/api/daily/');
            const latestRecord = R.head(dailyCasesObject.data);
            setCoronaDailyObject({
                activeDelta: latestRecord.deltaConfirmed,
                recoveredDelta: latestRecord.deltaRecovered === null ? 0 : latestRecord.deltaRecovered
            });
        } catch (err) {
            console.log("There was an error retreiving the daily case data: ", err);
            throw new Errow(err);
        }
    }

    const getCountryData = async () => {
        try {
            const countryData = await axios.get(countryConfirmedData);
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