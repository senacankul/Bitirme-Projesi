// api/data.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
    const response = await fetch('https://acikyesil.bursa.bel.tr/api/3/action/datastore_search?resource_id=1b8c32eb-d586-4d5c-ad6c-ebcb9e856496&limit=20');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
