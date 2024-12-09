import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import components
import Spinner from './component/Loader/Spinner';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Navbar/Header';
import { ResponsiveProvider } from './context/HeaderContext';
import InvoiceTable from './pages/Invoice/CreateInvoice/components/InvoiceTable';

// Lazy load other pages
const Login = lazy(() => import('./pages/auth/Login/Login'));
const SignUp = lazy(() => import('./pages/auth/signup/Signup'));
const Home = lazy(() => import('./pages/Home/Home'));
const CreateInvoice = lazy(() => import('./pages/Invoice/CreateInvoice/CreateInvoice'));

const App = () => {
  return (
    <ResponsiveProvider>
      <BrowserRouter>
        {/* Suspense fallback with loading spinner for lazy-loaded components */}
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Header />

          {/* Define the Routes for different paths */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-invoice" element={<CreateInvoice />} />
            <Route path="/invoicetable" element={<InvoiceTable />} />
          </Routes>
        </Suspense>
        
        {/* Toast notifications container */}
        <ToastContainer />
      </BrowserRouter>
    </ResponsiveProvider>
  );
};

export default App;
