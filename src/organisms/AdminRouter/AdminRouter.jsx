import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminRouter = props => {
    return (
        <>
            {props.admin && props.auth ? props.children : <Redirect to={'/'} />}
        </>
    );
};

export default AdminRouter;
