import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './utils/routes';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
