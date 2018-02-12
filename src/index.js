import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Main from './components/Main';
import './_global.scss';

const App = () => {
  return (
    <div className='MainApp'>
      <Header />
      <Main />
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('.app'),
);
