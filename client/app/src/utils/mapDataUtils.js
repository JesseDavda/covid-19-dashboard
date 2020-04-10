import _ from 'lodash';
import * as R from 'ramda';

export const collectCountries = (countryDataArray) => {
    if(R.length(countryDataArray)) {
        return _.mapValues(
            _.groupBy(countryDataArray, 'iso2'), 
            countryList => countryList.map(country => 
                _.omit(
                    country, 
                    "provinceState", 
                    "lastUpdate",
                    "lat",
                    "long",
                    "admin2",
                    "fips",
                    "combinedKey",
                    "incidentRate",
                    "peopleTested",
                    "iso3"
                )
            )
        );
    }

    return new Error('The countryDataArray was empty! :(');
}

export const combineCountries = (groupedDataObject) => {
    if(typeof groupedDataObject === 'object') {
         return _.mapValues(groupedDataObject, (country) => country.reduce((accumulatedObject, currentProvince) => {
                return {
                    confirmed: accumulatedObject.confirmed + currentProvince.confirmed,
                    recovered: accumulatedObject.recovered + currentProvince.recovered,
                    deaths: accumulatedObject.deaths + currentProvince.deaths,
                    active: accumulatedObject.active + currentProvince.active,
                    iso2: currentProvince.iso2,
                }
            }, {
                confirmed: 0,
                recovered: 0,
                deaths: 0,
                active: 0,
                iso2: country.iso2,
            })
        )
    }

    return new Error("The groupedDataObject was empty! :(");
}

export const insertCovidData = (geoJsonCountryData, combinedCovidCountryData) => {
    if(R.length(geoJsonCountryData) && typeof combinedCovidCountryData === 'object') {
        return geoJsonCountryData.map(country => {
            country.properties.COVID = 
                combinedCovidCountryData[country.properties.ISO_A2]
                    ? combinedCovidCountryData[country.properties.ISO_A2]
                    : "No Data"
            
            return country;
        });
    }

    return new Error("The arguments passed to insertCovid data are empty! :(");
}