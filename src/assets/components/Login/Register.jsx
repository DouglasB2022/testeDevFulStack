import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register() {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [nivel, setNivel] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleCreate = async (e) => {
    axios.post('http://127.0.0.1:8000/api/register', {
      name: name,
      cpf: cpf,
      email: email,
      nivel: nivel,
      password: 'password',
    }, {
      headers: {
        'Authorization': `Bearer YOUR_API_TOKEN`
      },
      validateStatus: function (status) {
        return status >= 200 && status < 300; // Aceitar apenas status de sucesso
      }
    })
      .then(response => {
        console.log('Registro criado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao criar o registro:', error);
      });
  };

    return (
      <div>
        <a href="/">Login</a>
        <form onSubmit={handleCreate}>
          <label><br/>
            <input
              type="text"
              placeholder="Digite seu Nome"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            </label><br/>
          <label>
            <input
              type="text"
              placeholder="Digite seu Cpf"
              name="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </label><br/>
          <label >
            <input
              type="email"
              placeholder="Digite seu E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label><br/>
          <label >
            <input
              type="text"
              placeholder="Nivel de permissao 1, 2 ou 3"
              name="nivel"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
              required
            />
          </label><br/>
          <label >
            <input
              type="text"
              placeholder="Digite sua senha"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label><br/><br/>
          <button type="submit">Registrar</button>
          <br/>
        </form>
      </div>
    )
}

export default Register;
