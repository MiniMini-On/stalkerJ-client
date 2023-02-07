import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import Main from "../pages/Main";
import Result from "../pages/Result";
import Epilogue from "../pages/Epilogue";
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/result" element={<Result />} />
      <Route path="/epilogue" element={<Epilogue />} />
    </Routes>
  );
}

export default AppRouter;
