import React from 'react';
import axios from 'axios';
import Basic from '../../templates/Basic';
import Jumbotron from '../../organisms/Jumbotron';
import Trends from '../../molecules/Trends';

const Landing = () => {
    return (
        <>
            <Basic>
                <Jumbotron />
                <Trends />
            </Basic>
        </>
    );
};

export default Landing;
