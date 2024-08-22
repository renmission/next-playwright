'use client';

import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState<string[]>([]);
  const [textValue, setTextValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData([...formData, textValue]);
    setTextValue('');
  };

  return (
    <div className='flex flex-col p-10'>
      <h1 className='text-3xl mb-5'>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder='Enter text'
          className='text-black border border-gray-400 px-3 py-2 rounded-l-lg'
        />
        <button
          type='submit'
          className='bg-black text-white px-3 py-2 rounded-r-lg mb-4'
        >
          Submit
        </button>
        <ul data-testId='todo-list'>
          {formData.map((data) => (
            <li key={data} data-testId='item'>
              {data}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Form;
