import '../App.css';
import React, { useState, useEffect } from 'react';
import withAuthentication from '../HOC/withAuthentication';

const data = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  { id: 4, name: 'David', email: 'david@example.com' }
];

 function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Component mounted');
    const timer = setTimeout(() => {
      setUsers(data);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    loading ? <div className="loading">Loading user's data...</div> : 
    <div className="user-list">
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td><a href='' target='_blank'>{user.email}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default withAuthentication(UserList);