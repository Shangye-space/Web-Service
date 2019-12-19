import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classnames from 'classnames';
import ItemCard from '../../atoms/ItemCard';
import Loader from '../../atoms/Loader';

import styles from './OneItem.module.scss';

const OneItem = ({ id }) => {
    const [isLoading, setLoading] = useState(true);
    let [item, setItem] = useState([]);
    let [info, setInfo] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3348/api/item/${id}`)
            .then(res => {
                setItem((item = res.data[0]));
                setLoading(false);
            })
            .catch(err => console.log(err.message));

        axios.get(`http://localhost:3348/api/item_info/${id}`).then(res => {
            setInfo((info = res.data[0]));
        });
    }, []);

    return (
        <div>
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
                    <ItemCard
                        name={item.Name}
                        price={item.Price}
                        id={item.ID}
                    />
                    <div className="col-3">
                        <span>{info.Quantity}</span>
                        <br />
                        <span>{info.Description}</span>
                        <br />
                        <span>{info.Size}</span>
                        <br />
                        <span>{info.Color}</span>
                        <br />
                        <span>{info.Manufacturer}</span>
                        <br />
                        <span>{info.ItemCode}</span>
                        <br />
                        <span>{info.Material}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OneItem;
