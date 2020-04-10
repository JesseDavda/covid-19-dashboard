import express from 'express';
import axios from 'axios';

import Utils from '../utils';

const router = express.Router();

router.get('/country', async (req, res) => {
    try {
        const countryData = await axios.get(Utils.endpoints.countryConfirmedData);
        res.status(200).json(countryData.data);
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
});

export default router;