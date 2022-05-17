import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RouterTes } from "./RouterTes"

let initialStore = {
  totalHarga: 85,
};

const createStoreDefault = createStore;

const reducerGlobal = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_HARGA":
      return {
        ...state,
        totalHarga: state.totalHarga +1,
      };
  
    default:
      return state;
  }
}

const storeGlobal = createStoreDefault(reducerGlobal);


ReactDOM.render(
  <React.StrictMode>
  <Provider store={storeGlobal}>
  <RouterTes />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
