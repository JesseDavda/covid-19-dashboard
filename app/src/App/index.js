import React from 'react';
import Dashboard from '../containers/Dashboard';
import { CovidDataContextProvider } from '../contexts/covidDataContext';

const App = () => {
    return (
        <CovidDataContextProvider>
            <Dashboard />
        </CovidDataContextProvider>
    );
}

export default App;