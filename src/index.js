import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/header';
import Main from './components/Main';
import reducers from './reducers';
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
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('.app'),
);
