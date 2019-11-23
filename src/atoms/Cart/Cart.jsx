import React from 'react';

import styles from './Cart.module.scss';

const Cart = () => {
    return (
        <div className={styles.cartWrapper}>
            <a className="fas fa-shopping-cart"></a>
        </div>
    );
};

export default Cart;
