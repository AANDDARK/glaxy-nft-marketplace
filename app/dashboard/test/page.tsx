// components/MyForm.js
'use client'
import { useState } from 'react';
import axios from 'axios';

export default function MyForm() {
  const [inputData, setInputData] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/pushNFT', { data: inputData });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Помилка при відправці запиту:', error);
      setMessage('Виникла помилка при відправці запиту');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit">Надіслати</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
