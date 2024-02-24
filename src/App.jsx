import { useState } from 'react';
import SiteRoutes from './SiteRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <SiteRoutes />
      </div>
    </>
  )
}

export default App
