import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
// import store from './config/store';
import { BrowserRouter as Router } from "react-router-dom";
import store from './config/store';

//my add
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Suspense fallback={<div className="mt-10 text-3xl font-bold text-center">Loading...</div>}>
    <Provider store = {store}>
    <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>  
   </Provider>
 </Suspense>
  </Router>
);
reportWebVitals();




// import React, { Suspense } from "react";
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from "react-redux";
// import store from './config/store';
// import { BrowserRouter as Router } from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Suspense fallback={<div className="mt-10 text-3xl font-bold text-center">Loading...</div>}>
//     <Provider store = {store}>
//         <App />
//       </Provider>
//     </Suspense>
//   </Router>
// );

// reportWebVitals();