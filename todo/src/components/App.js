import React from "react";
import { Routes, Route } from "react-router-dom";

// import Header from "./Header";
// import ListBody from "./ListBody";
// import MyModal from "./Modal";
import About from "./About";
import AdminPanel from "./AdminPanel";
import MainPage from "./MainPage";


import { useGetButtonQuery } from "../redux/slices/apiSlice";

const App = () => {
  // const { data } = useGetButtonQuery();

  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/admin" element={<AdminPanel />}></Route>
    </Routes>
  );
};

export default App;
