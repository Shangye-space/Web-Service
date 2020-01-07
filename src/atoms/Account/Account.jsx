import React from 'react';

import styles from './Account.module.scss';

const Account = ({ isVisible, setVisibility, userData }) => {
    function formatName(name) {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    return (
        <>
            <div
                className={styles.accountWrapper}
                onClick={() => setVisibility(!isVisible)}
            >
                <div className="fas fa-user-circle"></div>
                <span>Hi, {formatName(userData.name)}!</span>
            </div>
        </>
    );
};

export default Account;
