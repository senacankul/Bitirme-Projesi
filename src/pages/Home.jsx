import React, { useEffect, useState } from 'react';

const Home = () => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState('');
  const [dateHour, setDateHour] = useState('');
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const data = {
    "help": "https://acikyesil.bursa.bel.tr/api/3/action/help_show?name=datastore_search",
    "success": true,
    "result": {
      "include_total": true,
      "limit": 5,
      "records_format": "objects",
      "resource_id": "1b8c32eb-d586-4d5c-ad6c-ebcb9e856496",
      "total_estimation_threshold": null,
      "records": [
        {
          "_id": 1,
          "gml_id": "bursa_resmikurumlar.1",
          "ust_katego": "RESMİ KURUMLAR",
          "alt_katego": "İLÇE MÜDÜRLÜKLERİ",
          "ad": "ORHANELİ İLÇE SAĞLIK MÜDÜRLÜĞÜ",
          "geojson": "{\"type\":\"Point\",\"coordinates\":[28.986516686,39.902503315]}"
        },
        {
          "_id": 2,
          "gml_id": "bursa_resmikurumlar.2",
          "ust_katego": "RESMİ KURUMLAR",
          "alt_katego": "İLÇE MÜDÜRLÜKLERİ",
          "ad": "ORHANGAZİ İLÇE SAĞLIK MÜDÜRLÜĞÜ",
          "geojson": "{\"type\":\"Point\",\"coordinates\":[29.303493892,40.498039678]}"
        },
        {
          "_id": 3,
          "gml_id": "bursa_resmikurumlar.3",
          "ust_katego": "RESMİ KURUMLAR",
          "alt_katego": "İLÇE MÜDÜRLÜKLERİ",
          "ad": "OSMANGAZİ İLÇE SAĞLIK MÜDÜRLÜĞÜ",
          "geojson": "{\"type\":\"Point\",\"coordinates\":[29.013030988,40.202824709]}"
        },
        {
          "_id": 4,
          "gml_id": "bursa_resmikurumlar.4",
          "ust_katego": "RESMİ KURUMLAR",
          "alt_katego": "POSTANE",
          "ad": "PTT ULUCAMİ MERKEZ MÜDÜRLÜĞÜ",
          "geojson": "{\"type\":\"Point\",\"coordinates\":[29.062187819,40.184345284]}"
        },
        {
          "_id": 5,
          "gml_id": "bursa_resmikurumlar.5",
          "ust_katego": "RESMİ KURUMLAR",
          "alt_katego": "POSTANE",
          "ad": "PTT GEMLİK MERKEZ MÜDÜRLÜĞÜ",
          "geojson": "{\"type\":\"Point\",\"coordinates\":[29.154967535,40.431925251]}"
        }
      ],
      "fields": [
        { "id": "_id", "type": "int" },
        { "id": "gml_id", "type": "text" },
        { "id": "ust_katego", "type": "text" },
        { "id": "alt_katego", "type": "text" },
        { "id": "ad", "type": "text" },
        { "id": "geojson", "type": "text" }
      ],
      "_links": {
        "start": "/api/3/action/datastore_search?resource_id=1b8c32eb-d586-4d5c-ad6c-ebcb9e856496&limit=5",
        "next": "/api/3/action/datastore_search?resource_id=1b8c32eb-d586-4d5c-ad6c-ebcb9e856496&limit=5&offset=5"
      },
      "total": 342,
      "total_was_estimated": false
    }
  };
  
  
  const fetchOrganizations = async () => {
    try {
    //  const response = await fetch('https://acikyesil.bursa.bel.tr/api/3/action/datastore_search?resource_id=1b8c32eb-d586-4d5c-ad6c-ebcb9e856496&limit=5');
    //  const data = await response.json();
      const names = data.result.records.map(record => ({
        name: record.ad
      }));
      setOrganizations(names);
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };
  
  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  const deleteAppointments = () => {
    setAppointments([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOrganization || !dateHour) return;
    addAppointment({ organization: selectedOrganization, dateHour });
    setSelectedOrganization('');
    setDateHour('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center my-8">Bursa Büyükşehir Belediyesi Kamu Kurumları İçin Randevu Oluşturma Sistemi</h1>
      <p>Bursa Büyükşehir Belediyesi, Bursa ilinin yerel yönetimi ve hizmetlerini sağlayan kuruluştur. Akıllı Şehircilik kapsamında da faaliyetlerini sürdürmektedir. Devlet kurumlarında sıra beklemeden randevu oluşturabilirsiniz.</p>
 <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Randevu Sistemi</h1>
      <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2" htmlFor="organization">Kurum:</label>
      <select
        id="organization"
        value={selectedOrganization}
        onChange={(e) => setSelectedOrganization(e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      >
        <option value="" disabled>Kurum seçiniz</option>
        {organizations.map((org, index) => (
          <option key={index} value={org.name}>{org.name}</option>
        ))}
      </select>
      <label className="block mt-4 mb-2" htmlFor="dateHour">Tarih:</label>
      <input
        type="datetime-local"
        id="dateHour"
        value={dateHour}
        onChange={(e) => setDateHour(e.target.value)}
        className="w-full px-3 py-2 border rounded-md"
      />
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Randevu Oluştur</button>
    </form>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Randevular</h2>
        {appointments.length === 0 ? (
          <p>Bir randevunuz bulunmamaktadır.</p>
        ) : (
          <>
            <ul>
              {appointments.map((appointment, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{appointment.organization}</span> - {appointment.dateHour}
                </li>
              ))}
            </ul>
            <button onClick={deleteAppointments} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Hepsini Sil</button>
          </>
        )}
      </div>
    </div>
      
    </div>
  );
};

export default Home;