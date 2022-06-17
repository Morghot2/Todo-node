import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import CircularProgress from '@mui/material/CircularProgress';

const MainPage = React.lazy(() => import("./MainPage"));
const ListBody = React.lazy(() => import("./ListBody"));
const About = React.lazy(() => import("./About"));
const AdminPanel = React.lazy(() => import("./AdminPanel"));

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Suspense fallback={<CircularProgress />}><MainPage /></Suspense>}>
      {/* <Route  exact path="page" element={<ListBody />} /> */}
      </Route>
      <Route exact path="/about" element={<Suspense fallback={<CircularProgress />}><About /></Suspense>}></Route>
      <Route exact path="/admin" element={<Suspense fallback={<CircularProgress />}><AdminPanel /></Suspense>}></Route>
    </Routes>
  );
};

export default App;
