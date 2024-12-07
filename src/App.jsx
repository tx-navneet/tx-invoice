import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Spinner from './component/Loader/Spinner';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Navbar/Header';
import { ResponsiveProvider } from './context/HeaderContext';
const Login = lazy(() => import('./pages/auth/Login/Login'));
const SignUp = lazy(() => import('./pages/auth/signup/Signup'));
const Home = lazy(() => import('./pages/Home/Home'));
const CreateInvoice = lazy(
  () => import('./pages/Invoice/CreateInvoice/CreateInvoice')
);

const App = () => {
  return (
    <ResponsiveProvider>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-invoice" element={<CreateInvoice />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ResponsiveProvider>
  );
};

export default App;
