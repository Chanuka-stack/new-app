import React, { useState } from 'react';
import axios from 'axios';

const EntryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/entries', {
        title,
        content
      });
      console.log(response.data);
      setTitle(''); // Clear form after successful submission
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EntryForm;
