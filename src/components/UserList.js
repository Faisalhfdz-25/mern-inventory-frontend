import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-three-quarters">
            <Link to="/add" className="button is-success mb-3">Add New</Link>
            <table className='table is-fullwidth is-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="button is-small is-primary mr-2" >Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList