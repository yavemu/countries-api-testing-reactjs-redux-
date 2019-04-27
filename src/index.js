import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Countries from './components/countries';
import Country from './components/country';

const Root = (
    <BrowserRouter>
        <Switch>
            <Route exac path='/countries' component={Countries} />
            <Route path='/country/:itemId' component={Country} />
            <Redirect from='/' to='countries' />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));