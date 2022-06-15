import React from "react";

import Header from "./Header";
import ListBody from "./ListBody";
import MyModal from "./Modal";

import { useGetButtonQuery } from "../redux/slices/apiSlice";

const MainPage = () => {
  const { data } = useGetButtonQuery();
  return (
    <>
      <Header />
      <ListBody />
      {data?.show && <MyModal />}
    </>
  );
};

export default MainPage;
