import express from 'express';
import axios from 'axios';
import _ from 'lodash';

import Utils from '../utils';

const router = express.Router();

router.get('/summary', async (req, res) => {
    try {
        const summaryData = await axios.get(Utils.endpoints.summaryCases);
        const summarisedObject = {
            confirmed: summaryData.data.confirmed,
            recovered: summaryData.data.recovered,
            deaths: summaryData.data.deaths,
        }
        
        res.status(200).json(summarisedObject);
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: error });
        throw new Error(error);
    }
});

export default router;