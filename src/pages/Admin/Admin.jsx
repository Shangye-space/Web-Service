import React, { useEffect, useState } from 'react';
import Table from '../../atoms/Table';
import TableRow from '../../atoms/TableRow/';
import axios from 'axios';

export default function Admin() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function makeAsync() {
            const response1 = await axios.get(
                'http://localhost:3348/api/items',
            );

            let ids = '';
            response1.data.forEach(item => {
                ids += item.ID + ',';
            });
            ids = ids.substring(0, ids.length - 1);

            const response2 = await axios.get(
                `http://localhost:3348/api/image/return_links/` + ids,
            );

            let arrayOfImages = [];
            response2.data.forEach(image => {
                arrayOfImages.push({
                    id: parseInt(image.split(' ')[0]),
                    link: image.split(' ')[1],
                });
            });

            const updated_items = response1.data.map((item, indx) => {
                let result = [];
                arrayOfImages.forEach(image => {
                    if (item.ID === image.id) {
                        result.push(
                            (response1.data[indx] = {
                                ...item,
                                Link: image.link,
                            }),
                        );
                    }
                });
                return result[0];
            });

            const response3 = await axios.get(
                'http://localhost:3348/api/item_infos/' + ids,
            );

            const updated_items2 = updated_items.map((item, indx) => {
                let result = [];
                response3.data.forEach(item_info => {
                    if (item.ID === item_info.ItemID) {
                        result.push(
                            (updated_items[indx] = {
                                ...item,
                                ...item_info,
                            }),
                        );
                    }
                });
                return result[0];
            });

            setItems(updated_items2);
        }
        makeAsync();
    }, []);

    return (
        <>
            <Table>
                {items.map(item => (
                    <TableRow
                        key={item.ID}
                        id={item.ID}
                        name={item.Name}
                        description={item.Description}
                        quantity={item.Quantity}
                        discount={item.Discount}
                        price={item.Price}
                        in_sale={item.InSale}
                        img={item.Link}
                    />
                ))}
            </Table>
        </>
    );
}
