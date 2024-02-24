import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold">
      <img src="https://www.bursa.bel.tr/dosyalar/image/4A.jpg" alt="Bursa Büyükşehir Belediyesi Logosu" width="300"/>
      </div>
      <div className="flex space-x-4 items-center">
      <NavLink className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/">Anasayfa</NavLink>
      <NavLink className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/kurumlar">Kurumlar</NavLink>
      <NavLink className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/hakkimizda">Hakkımızda</NavLink>
      <NavLink className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to="/iletisim">İletişim</NavLink>
      </div>
    </div>
  </nav>
  )
}

export default Navbar