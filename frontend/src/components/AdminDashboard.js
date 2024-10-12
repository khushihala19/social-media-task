import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:8090/api/users');
      setUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>{user.socialMediaHandle}</p>
          <div>
            {user.images.map((image, idx) => (
              <img key={idx} src={`http://localhost:8090/${image}`} alt="user submission" width="100" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
