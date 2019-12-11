import React from 'react';

import styles from './ADitems.module.scss';

const ADitems = () => {
    return (
        <div className={styles.items}>
            <div className={styles.left}>
                <img src="/images/IMG_2592.jpg" />
            </div>
            <div className={styles.right}>
                <img src="/images/RXTM-088-600x600.jpg" />
            </div>
        </div>
    );
};

export default ADitems;
