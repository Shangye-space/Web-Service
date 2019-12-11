import React from 'react';

import styles from './Account.module.scss';

const Account = ({ isVisible, setVisibility }) => {
    return (
        <>
            <div
                className={styles.accountWrapper}
                onClick={() => setVisibility(!isVisible)}
            >
                <div className="fas fa-user-circle"></div>
                <span>Hi, Customer</span>
            </div>
        </>
    );
};

export default Account;
