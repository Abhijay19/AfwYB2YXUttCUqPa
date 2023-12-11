import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import BmiCalculator from './components/BmiCalculator';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRouter = () => (
  <BrowserRouter basename='/AfwYB2YXUttCUqPa'>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Main />} />
        <Route path='bmi_calculator' element={<BmiCalculator />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);