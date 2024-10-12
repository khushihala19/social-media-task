import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    try {
      await axios.post('http://localhost:8090/api/users', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Submitted successfully');
    } catch (error) {
      console.error('Error submitting data', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br></br>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Social Media Handle"
        value={socialMediaHandle}
        onChange={(e) => setSocialMediaHandle(e.target.value)}
        required
      />
      <br></br>
      <br></br>
      <br></br>
      <input type="file" multiple onChange={handleImageChange} />
      <br></br>
      <br></br>
      <br></br>

      <button type="submit">Submit</button>
      <br></br>
      <br></br>

    </form>
  );
};

export default UserForm;
