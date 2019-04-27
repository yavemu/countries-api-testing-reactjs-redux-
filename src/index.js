import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Countries from './components/countries';
import Country from './components/country';

import store from './redux/store';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exac path='/countries' component={Countries} />
                <Route path='/country/:itemId' component={Country} />
                <Redirect from='/' to='countries' />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));