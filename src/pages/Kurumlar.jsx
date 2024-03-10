import React, { useEffect, useState } from 'react';

const ListItem = ({ item }) => {
  return (
    <li className="py-2 border-b border-gray-200">
      {item}
    </li>
  );
};

const List = ({ items }) => {
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const Kurumlar = () => {
  const [organizations, setOrganizations] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('/api');
          const data = await response.json(); 
          const organizationList = data.result.records.map(record => record.ad);
          setOrganizations(organizationList);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    
    fetchData();
    }, []);

    
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kurumlar</h1>
      <List items={organizations} />
    </div>
  );
};

export default Kurumlar;
