import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import './styles/common.css';
import routes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
