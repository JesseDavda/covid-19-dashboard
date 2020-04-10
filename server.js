import 'dotenv/config';
import express from 'express';
import path from 'path';

// Routes
import SummaryRoute from './routes/summary';
import DailyRoute from './routes/daily';
import CountryRoute from './routes/country';

const app = express();

const getAssetPath = () => {
    return path.join(__dirname, "client/dist");
}

app.use(express.static(getAssetPath()));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server listening on port: ', PORT);
});

app.use(SummaryRoute);
app.use(DailyRoute);
app.use(CountryRoute);