import React, { 
    createContext,
    useState,
    useEffect 
} from 'react';
import axios from 'axios';
import * as R from 'ramda';

import { countryConfirmedData } from '../utils/endpoints';
import { geoJson, countryData } from '../assets/GeoToplogy';
import * as MapUtils from '../utils/mapDataUtils';

const MapContext = createContext();

export const MapProvider = ({ children }) => {
    const [ geoJsonState, setGeoJsonState ] = useState(geoJson);

    const getCountryData = async () => {
        try {
            const countryData = await axios.get(countryConfirmedData);
            return countryData;
        } catch (error) {
            throw new Error(error)
        }
    }

    const createCountryDataArray = async () => {
        try {
            const rawData = await getCountryData();
            return R.pipe(
                MapUtils.collectCountries,
                MapUtils.combineCountries
            )(rawData.data);
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
        }}>
            {children}
        </MapContext.Provider>
    );
}

export default MapContext;