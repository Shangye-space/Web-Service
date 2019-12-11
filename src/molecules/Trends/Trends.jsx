import React from 'react';
import classnames from 'classnames';

import BestSeller from '../../atoms/BestSeller';
import Recommendations from '../../atoms/Recommendations';

import styles from './Trends.module.scss';

const Trends = () => {
    return (
        <div className={classnames('container', styles.trendsWrapper)}>
            <div className={styles.header}>{"Today's Trends"}</div>
            <div className={classnames('col-12', styles.tileWrapper)}>
                <BestSeller />
                <Recommendations />
            </div>
        </div>
    );
};

export default Trends;
