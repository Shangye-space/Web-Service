import React from 'react';
import classnames from 'classnames';

import ADitems from '../ADitems';

import styles from './Recommendations.module.scss';

const Recommendations = () => {
    return (
        <div className={classnames('col-6', styles.wrapper)}>
            <div className={styles.banner}>
                <div>Our Recommendations</div>
            </div>
            <ADitems />
        </div>
    );
};

export default Recommendations;
