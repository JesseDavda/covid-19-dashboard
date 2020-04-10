import _ from 'lodash';

import { collectCountries, combineCountries } from './mapDataUtils';

export const flattenCountryObject = (countryObject) => {
    const countryArray = [];
    _.mapKeys(countryObject, (value, key) => {
        if(key)
        countryArray.push({
            countryName: key,
            cases: value.confirmed,
        });
    });

    return countryArray;
}

export const sortCountryArray = (flatCountryArray) => {
    return _.reverse(_.sortBy(flatCountryArray, obj => obj.cases));
}

export const sliceFromTop = num => a => a.slice(0, num);

export const calculateTopTen = countryData => {
    let functionArray = [
        collectCountries,
        combineCountries,
        flattenCountryObject,
        sortCountryArray,
        sliceFromTop(10)
    ];

    return functionArray.reduce(
        (accumulator, currentFunction) => currentFunction(accumulator),
        countryData
    );
}