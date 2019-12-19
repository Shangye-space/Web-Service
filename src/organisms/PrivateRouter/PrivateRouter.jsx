import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { verifyAuth } from '../../helpers/verify/verify';

const PrivateRoute = props => {
    return <>{props.auth ? props.children : <Redirect to={'/'} />}</>;
};

export default PrivateRoute;
