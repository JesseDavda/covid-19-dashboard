import express from 'express';
import axios from 'axios';

import Utils from '../utils';

const router = express.Router();

router.get('/daily', async (req, res) => {
    try {
        const dailyData = await axios.get(Utils.endpoints.dailyCovidCases);
        const todaysData = dailyData.data[1];
        res.status(200).json({ 
            deltaConfirmed: todaysData.totalConfirmed,
            deltaDeceased: todaysData.deaths.total
        });
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
});

export default router;