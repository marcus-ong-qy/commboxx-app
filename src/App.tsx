import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import { Routes } from './routes/Routes'
import store from './store/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<p>loading...</p>}> {/* TODO implement suspense */}
          <Routes />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
