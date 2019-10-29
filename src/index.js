import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApplication = () => {
  render(<App />, document.getElementById('root'));
};

renderApplication();

if (module.hot) {
  if (module.hot.accept('./App')) {
    renderApplication();
  }
}
