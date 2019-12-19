import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classnames from 'classnames';

import ItemCard from '../../atoms/ItemCard';

import styles from './Store.module.scss';
import Loader from '../../atoms/Loader';

const Store = () => {
    let [items, setItems] = useState([]);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Update the document title using the browser API
        axios
            .get('http://localhost:3348/api/items')
            .then(res => {
                setItems((items = res.data));

                console.log(items);
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <>
            {isLoading ? (
                <div
                    style={{
                        height: 1000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div className={classnames('container', styles.wrapper)}>
                    {items.map(item => (
                        <ItemCard
                            id={item.ID}
                            key={item.ID}
                            name={item.Name}
                            price={item.Price}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default React.memo(Store);
