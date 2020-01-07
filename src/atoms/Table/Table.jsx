import React from 'react';
import classnames from 'classnames';
import styles from './Table.module.scss';

export default function Table({ children }) {
    return (
        <table className={classnames('table', styles.table)}>
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">image</th>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">in_sale</th>
                    <th scope="col">quantity</th>
                    <th scope="col">discount</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
