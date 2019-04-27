import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Countries from '../countries';
import Country from '../country';

import store from '../../redux/store';


function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exac path='/countries' component={Countries} />
                    <Route path='/country/:itemId' component={Country} />
                    <Redirect from='/' to='countries' />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default Root;