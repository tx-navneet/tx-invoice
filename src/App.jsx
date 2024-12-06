import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Spinner from "./component/Loader/Spinner";
const Login = lazy(() => import("./pages/auth/Login/Login"));
const SignUp = lazy(() => import("./pages/auth/signup/Signup"));
const Home = lazy(() => import("./pages/Home/Home"));
const CreateInvoice = lazy(() => import("./pages/Invoice/CreateInvoice/CreateInvoice"));

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
