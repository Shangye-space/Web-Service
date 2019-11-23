import React from 'react';

import styles from './UserBar.module.scss';

import Cart from '../../atoms/Cart';
import Account from '../../atoms/Account';

const UserBar = () => {
    return (
        <div className={styles.userBarWrapper}>
            <Cart />
            <Account />
        </div>
    );
};

export default UserBar;
