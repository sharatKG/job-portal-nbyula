import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from './component/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/About' element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
