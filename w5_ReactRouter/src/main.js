import React from 'react';
import {render} from 'react-dom';
import App from './App';

import {HashRouter,BrowserRouter} from 'react-router-dom'

render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.querySelector('#app')
)