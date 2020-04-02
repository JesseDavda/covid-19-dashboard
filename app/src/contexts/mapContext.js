import React, { 
    createContext,
    useState,
    useEffect,
    useContext,
} from 'react';
import axios from 'axios';
import * as R from 'ramda';

import { countryConfirmedData } from '../utils/endpoints';
import { geoJson, countryData } from '../assets/GeoToplogy';
import * as MapUtils from '../utils/mapDataUtils';
import { CovidDataContext } from './covidDataContext';

const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const { getCountryData, coronaDataObject } = useContext(CovidDataContext);
    const [ geoJsonState, setGeoJsonState ] = useState(geoJson);

    const createCountryDataArray = async () => {
        try {
            const rawData = await getCountryData();
            return R.pipe(
                MapUtils.collectCountries,
                MapUtils.combineCountries
            )(rawData);
        } catch (error) {
            throw new Error(error);
        }
    }

    const createPropertiesCountryData = async () => {
        try {
            let geoJsonTemp = geoJsonState;
            const countriesObject = await createCountryDataArray();
            const geometries = MapUtils.insertCovidData(countryData, countriesObject);

            geoJsonTemp.objects.ne_110m_admin_0_countries.geometries = geometries;
            setGeoJsonState(geoJsonTemp);
        } catch(error) {
            throw new Error(error);
        }
    }

    useEffect(() => {
        createPropertiesCountryData();
    }, [])

    return (
        <MapContext.Provider value={{
            geoJson: geoJsonState,
            totalCases: coronaDataObject.totalCases
        }}>
            {children}
        </MapContext.Provider>
    );
}

export default MapContext;