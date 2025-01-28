import React, {useState} from "react";
import axios from "axios";

function  Edit(){
 const editingUsuario = location.state?.user;
 const [editUser, setEditUser] = useState({
   name: name,
   cpf: cpf,
   email: email,
   nivel: nivel,
   password: password
 });

  const HandleEdit = (userId) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/update/${userId}`, {
      name: name,
      cpf: cpf,
      email: email,
      nivel: nivel,
      password: 'password'},{
      headers: {
        'Authorization': `Bearer YOUR_API_TOKEN`
      }
    })
      .then(() => {
        setEditUser(users.map(user =>
          user.id === userId ? { ...user, name: "Novo Nome", cpf: "", email: "Novo Email", nivel: "Novo Nivel",  } : user
        ));
      })
      .catch(error => {
        console.error(`Erro ao editar usuário com ID: ${userId}`, error);
      });
  };

return (
  <div>
    <a href="/">Login</a>
    <form onSubmit={HandleEdit}>
      <label><br/>
        <input
          type="text"
          placeholder="Digite seu Nome"
          name="name"
          value={editUser.name}
          onChange={(e) => editingUsuario(e.target.value)}
          required
        />
      </label><br/>
      <label>
        <input
          type="text"
          placeholder="Digite seu Cpf"
          name="cpf"
          value={editUser.cpf}
          onChange={(e) => editingUsuario(e.target.value)}
          required
        />
      </label><br/>
      <label >
        <input
          type="email"
          placeholder="Digite seu E-mail"
          name="email"
          value={editUser.email}
          onChange={(e) => editingUsuario(e.target.value)}
          required
        />
      </label><br/>
      <label >
        <input
          type="text"
          placeholder="Nivel de permissao do sistema"
          name="nivel"
          value={editUser.nivel}
          onChange={(e) => editingUsuario(e.target.value)}
          required
        />
      </label><br/>
      <label >
        <input
          type="text"
          placeholder="Digite sua senha"
          name="password"
          value={editUser.password}
          onChange={(e) => editingUsuario(e.target.value)}
          required
        />
      </label><br/><br/>
      <button type="submit">Registrar</button>
      <br/>
    </form>
  </div>
)
  }
export default Edit;
