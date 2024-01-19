import React from "react";
import { Route, Routes } from "react-router-dom";
import RickList from "./components/RickList";
import MortyItem from "./components/MortyItem";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/list" element={<RickList />} />
      <Route path="/item/:id" element={<MortyItem />} />
    </Routes>
  );
};

export default MainRouter;
