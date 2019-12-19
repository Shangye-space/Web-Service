import React, { useState } from 'react';
import Basic from '../../templates/Basic';
import OneItem from '../../organisms/OneItem';

const SingleItem = props => {
    const [id, setId] = useState(null);

    try {
        let { id } = props.match.params;
        setId(parseInt(id));
    } catch (e) {
        console.log(e.message);
    }

    return (
        <Basic>
            <OneItem id={id} />
        </Basic>
    );
};

export default SingleItem;
