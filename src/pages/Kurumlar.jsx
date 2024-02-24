import React, { useEffect } from 'react';
import { organizationList } from '../data/organizations';

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
useEffect(() => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://acikyesil.bursa.bel.tr/api/3/action/datastore_search';
    
    const fetchData = async () => {
        try {
        const response = await fetch(proxyUrl + apiUrl, {
            headers: {
            'Origin': 'http://localhost:5173',
            'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const data = await response.json();
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };
    
    fetchData();
    }, []);

    
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kurumlar</h1>
      <List items={organizationList} />
    </div>
  );
};

export default Kurumlar;
