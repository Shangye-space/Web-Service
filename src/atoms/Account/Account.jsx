import React from 'react';

import styles from './Account.module.scss';

const Account = () => {
    return (
        <>
            <div className={styles.accountWrapper}>
                <a className="fas fa-user-circle"></a>
                <span>Hi, Customer</span>
            </div>
        </>
    );
};

export default Account;
