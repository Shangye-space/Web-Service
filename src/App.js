import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleItem from './pages/SingleItem';
import PrivateRoute from './organisms/PrivateRouter/PrivateRouter.jsx';

import { verifyAuth } from './helpers/verify/verify';

import Landing from './pages/Landing/';
import Header from './organisms/Header';
import Shop from './pages/Shop';
import Profile from './pages/Profile';

const App = () => {
    const [auth, setAuth] = useState(verifyAuth());
    useEffect(() => {
        (async function fetchData() {
            setAuth(await auth);
        })();
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/item/:id" component={SingleItem} />
                    <PrivateRoute path="/me" auth={auth}>
                        <Route path="/me" exact component={Profile} />
                    </PrivateRoute>
                    <Route path="*" render={() => <h1>NOT FOUND</h1>} />
                </Switch>
            </div>
        </Router>
    );
};

export default React.memo(App);
