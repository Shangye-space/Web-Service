import React from 'react';

import Header from './organisms/Header';
import Jumbotron from './organisms/Jumbotron';
import Trends from './molecules/Trends';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Jumbotron />
            <Trends />
        </div>
    );
};

export default App;
