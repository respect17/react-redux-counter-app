// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Counter from './app/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>My Redux Toolkit App</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;