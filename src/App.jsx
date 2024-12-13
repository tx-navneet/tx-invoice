import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import components
import Spinner from './component/Loader/Spinner';
import { ResponsiveProvider } from './context/HeaderContext';
import InvoiceTable from './pages/Invoice/CreateInvoice/components/InvoiceTable';
import InventoryTable from './Ag-grids/InventoryTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Lazy load other pages
const Login = lazy(() => import('./pages/auth/Login/Login'));
const SignUp = lazy(() => import('./pages/auth/signup/Signup'));
const Home = lazy(() => import('./pages/Home/Home'));
const Dahsboard = lazy(() => import('./pages/Kanban/Dashboard/Dashboard'));
const CreateInvoice = lazy(
  () => import('./pages/Invoice/CreateInvoice/CreateInvoice')
);
const InvoicePDF = lazy(
  () => import('./pages/Invoice/CreateInvoice/InvoicePDF/InvoicePDF')
);

const App = () => {
  console.log('Navneet');

  return (
    <ResponsiveProvider>
      <BrowserRouter>
        {/* Suspense fallback with loading spinner for lazy-loaded components */}
        <Suspense fallback={<Spinner />}>
          {/* <Navbar /> */}
          {/* <Header /> */}

          {/* Define the Routes for different paths */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-invoice" element={<CreateInvoice />} ></Route>
            <Route path="/invoicetable" element={<InvoiceTable />} />
            <Route path="/inventory" element={<InventoryTable />} />
            <Route path="/dashboard" element={<Dahsboard />} />
            <Route path="/invoicepdf" element={<InvoicePDF />} />
          </Routes>
        </Suspense>

        {/* Toast notifications container */}
        <ToastContainer />
      </BrowserRouter>
    </ResponsiveProvider>
  );
};

export default App;
