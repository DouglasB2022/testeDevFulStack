import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logout from "./Logout.jsx";
import {useNavigate} from "react-router-dom";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [refreshUsers, setRefreshUsers] = useState(false);
  const navigate = useNavigate();
  const redirect = (userId) =>{
    navigate(`/edit/${userId}`)
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/user");
        setUsers(response.data);
      } catch (error) {
        console.error('Mensagem de erro:', error);
      }
    };

    fetchUsers();
  }, [refreshUsers]);

  const DeleteUser = async (userId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/destroy/${userId}`, () =>{

      });
      setRefreshUsers((prev) => !prev); // Aciona o gatilho para fazer o refresh no useEffect
    } catch (error) {
      console.error('Erro ao deletar usuario:', error);
    }
  };

  const HandleDelete = (userId) => {
    axios.delete(`http://127.0.0.1:8000/api/destroy/${userId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer YOUR_API_TOKEN`
      }
    })
      .then(() => {
        setUsers(users.filter(user => user.id !== userId)); // Remove deleted user from the list
      })
      .catch(error => {
        console.error('Erro ao deletar usuário:', error);
      });
  };

  return (
    <div>
      <h1>Usuários</h1>
        < Logout />
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}
            - {user.email}
              <button
                onClick={() => HandleDelete(user.id)}>
                Deletar
              </button>
              <button
                onClick={() => redirect(user.id)}>Editar
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;

