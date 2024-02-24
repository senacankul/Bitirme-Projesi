import React from 'react';

const Iletisim = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">İletişim</h1>
      <div className="mb-4">
        <p className="text-lg font-semibold">Adres:</p>
        <p>Zafer Mh. Ankara Yolu Cd. C Blok No:1 PK:16080 Osmangazi / BURSA</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Telefon:</p>
        <p>444 16 00</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">E-posta:</p>
        <p><a className="text-blue-500" href="mailto:acikyesil@bursa.bel.tr">acikyesil@bursa.bel.tr</a></p>
      </div>
    </div>
  );
};

export default Iletisim;
