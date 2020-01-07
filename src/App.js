import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleItem from './pages/SingleItem';
import PrivateRoute from './organisms/PrivateRouter/PrivateRouter.jsx';

import { verifyAuth, fetchData, validateAdmin } from './helpers/verify/verify';

import Landing from './pages/Landing/';
import Header from './organisms/Header';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import AdminRouter from './organisms/AdminRouter/AdminRouter.jsx';
import Admin from './pages/Admin';

const App = () => {
    const [auth, setAuth] = useState(verifyAuth());
    const [admin, setAdmin] = useState(validateAdmin());
    const [userData, setUserData] = useState({
        id: undefined,
        name: 'Customer',
        email: undefined,
    });

    useEffect(() => {
        async function makeAsync() {
            setAuth(await auth);
            setAdmin(await admin);
        }

        makeAsync();
    }, []);

    useEffect(() => {
        async function makeAsync() {
            const data = await fetchData();
            setUserData(data);
        }

        makeAsync();
    }, []);

    return (
        <Router>
            <div className="App">
                <Header userData={userData} />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/item/:id" component={SingleItem} />
                    <PrivateRoute path="/me" auth={auth}>
                        <Route path="/me" exact component={Profile} />
                    </PrivateRoute>
                    <AdminRouter auth={auth} admin={admin}>
                        <Route path="/admin" exact component={Admin} />
                    </AdminRouter>
                    <Route path="*" render={() => <h1>NOT FOUND</h1>} />
                </Switch>
            </div>
        </Router>
    );
};

export default React.memo(App);
