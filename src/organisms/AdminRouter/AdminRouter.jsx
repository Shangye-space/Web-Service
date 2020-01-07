import React from 'react';

const AdminRouter = props => {
    return <>{props.admin ? props.children : <>ADMIN HELLO</>}</>;
};

export default AdminRouter;
