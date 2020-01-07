import React from 'react';

export default function TableRow({
    id,
    img,
    name,
    description,
    price,
    in_sale,
    quantity,
    discount,
}) {
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>
                <img style={{ height: '60px', width: '60px' }} src={img} />
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{in_sale.toString()}</td>
            <td>{quantity}</td>
            <td>{discount}</td>
            <td></td>
        </tr>
    );
}
