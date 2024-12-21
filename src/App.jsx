import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from './component/Loader/Spinner';
import { ResponsiveProvider } from './context/HeaderContext';
import SwiperCardComponent from './pages/Kanban/pages/PipeLine/Cards/SwiperCard';

// Lazy-loaded components
const Login = lazy(() => import('./pages/auth/Login/Login'));
const SignUp = lazy(() => import('./pages/auth/signup/Signup'));
const Home = lazy(() => import('./pages/Home/Home'));
const Dashboard = lazy(() => import('./pages/Kanban/Dashboard/Dashboard'));
const CreateInvoice = lazy(
  () => import('./pages/Invoice/CreateInvoice/CreateInvoice')
);
const InvoicePDF = lazy(
  () => import('./pages/Invoice/CreateInvoice/InvoicePDF/InvoicePDF')
);
const InvoiceTable = lazy(
  () => import('./pages/Invoice/CreateInvoice/components/InvoiceTable')
);
// const InventoryTable = lazy(()=>import('./Ag-grids/InventoryTable'))
const InventoryTable = lazy(() => import('./Ag-grids/InventoryTable'));
const Pipeline = lazy(() => import('./pages/Kanban/pages/PipeLine/Pipeline'));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword'));
const FiveZeroThree = lazy(() => import('./component/error/FiveZeroThree'));
const LockScreen = lazy(() => import('./component/LockScreen/LockScreen'));

// Define grouped routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'resetpassword', element: <ResetPassword /> },
    ],
  },
  {
    path: '/dashboard',
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'pipeline', element: <Pipeline /> },
    ],
  },
  {
    path: '/invoice',
    children: [
      { path: '', element: <CreateInvoice /> },
      { path: 'table', element: <InvoiceTable /> },
      { path: 'pdf', element: <InvoicePDF /> },
      { path: 'inventorytable', element: <InventoryTable /> },
      {path: "swiper" , element: <SwiperCardComponent />}

    ],
  },

  {
    path: '/error',
    children: [
      { path: '503', element: <FiveZeroThree /> },
      { path: 'lockscreen', element: <LockScreen /> },
    ],
  },
]);

const App = () => {
  return (
    <ResponsiveProvider>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
      <ToastContainer />
    </ResponsiveProvider>
  );
};

export default App;
