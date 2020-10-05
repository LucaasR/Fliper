import React from 'react';
import ReactDOM from 'react-dom';

import store from './app/store/store';
import client from './services/api'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client'

import SummaryPage from './container/summary-page'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ client }>
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ SummaryPage } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
