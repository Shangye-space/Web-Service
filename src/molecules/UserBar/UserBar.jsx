import React, { useState } from 'react';

import styles from './UserBar.module.scss';

import Cart from '../../atoms/Cart';
import Account from '../../atoms/Account';
import Auth from '../../atoms/Auth';

const UserBar = ({ userData }) => {
    const [isAuthVisible, setAuthVisibility] = useState(false);

    return (
        <div className={styles.userBarWrapper}>
            <Cart />
            <Account
                userData={userData}
                isVisible={isAuthVisible}
                setVisibility={setAuthVisibility}
            />
            <Auth isVisible={isAuthVisible} />
        </div>
    );
};

export default UserBar;
