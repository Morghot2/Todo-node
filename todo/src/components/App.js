import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';

const MainPage = React.lazy(() => import("./MainPage"));
const ListBody = React.lazy(() => import("./ListBody"));
const About = React.lazy(() => import("./About"));
const AdminPanel = React.lazy(() => import("./AdminPanel"));
const Login = React.lazy(() => import("./Login"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<CircularProgress />}><MainPage /></Suspense>}>
        <Route path=":page" element={<ListBody />} />
      </Route>
      <Route exact path="/about" element={<Suspense fallback={<CircularProgress />}><About /></Suspense>}></Route>
      <Route exact path="/admin" element={<Suspense fallback={<CircularProgress />}><AdminPanel /></Suspense>}></Route>
      <Route exact path="/signin" element={<Suspense fallback={<CircularProgress />}><Login /></Suspense>}></Route>

    </Routes>
  );
};

export default App;
