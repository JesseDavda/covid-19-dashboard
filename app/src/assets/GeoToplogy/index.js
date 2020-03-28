import GeoJSON from './geoTopology.json';
import * as R from 'ramda';

export const geoJson = GeoJSON;

export const countryPath = {
    type: R.path(['type'], geoJson),
    arcs: R.path(['arcs'], geoJson),
    transform: R.path(['transform'], geoJson)
}

export const countryData = R.path([
           'objects',
           'ne_110m_admin_0_countries',
           'geometries',
       ], geoJson);