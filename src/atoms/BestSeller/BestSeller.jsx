import React from 'react';
import classnames from 'classnames';

import styles from './BestSeller.module.scss';

const BestSeller = () => {
    return (
        <div className={classnames('col-6', styles.bestSellerWrapper)}>
            <img src="/images/989171832_o.jpg" alt="" />
        </div>
    );
};

export default BestSeller;
