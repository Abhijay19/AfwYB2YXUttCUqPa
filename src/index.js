import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from './components/Main';
import BmiCalculator from './components/BmiCalculator';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Main/>} />
      <Route path='bmi_calculator' element={<BmiCalculator/>} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


