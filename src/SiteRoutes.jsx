import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Kurumlar from './pages/Kurumlar';
import Hakkimizda from './pages/Hakkimizda';
import Iletisim from './pages/İletisim';

function SiteRoutes({}) {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/kurumlar' element={<Kurumlar />}/>
          <Route path='/hakkimizda' element={<Hakkimizda />}/>
          <Route path='/iletisim' element={<Iletisim />}/>
      </Routes>
    </>
  );
}

export default SiteRoutes;