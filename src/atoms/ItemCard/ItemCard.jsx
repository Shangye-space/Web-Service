import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './ItemCard.module.scss';

const ItemCard = ({ name, price, id }) => {
    return (
        <div className={classnames('col-3', 'hvr-grow', styles.wrapper)}>
            <Link to={`/shop/item/${id}`} className={styles.link}>
                <div className={styles.card}>
                    <img
                        src="https://s13.postimg.cc/5al19x0d3/media_img.jpg"
                        className={styles.cardMedia}
                    />
                    <div className={styles.cardDetails}>
                        <h2 className={styles.cardHead}>{name}</h2>

                        <strong className={styles.cardActionButton}>
                            {price}$
                        </strong>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;
