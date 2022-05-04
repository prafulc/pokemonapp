import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Templates/Layout';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
