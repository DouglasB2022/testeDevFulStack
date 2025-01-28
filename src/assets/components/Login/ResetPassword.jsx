import {useState} from "react";
function ResetPassword(){
const [email, setEmail] = useState("");
const HandleReset = async (e) =>{
  e.preventDefault();
  try {
    const response = await fetch("http://127.0.0.1:8000/api/password/");
    if (!response.ok) {
      throw new Error('Erro ao buscar dados!');
    }
    const result = await response.json();
    setData(result); // Atualiza o estado com a resposta da API
  } catch (err) {
    setError(err.message); // Em caso de erro, atualiza o estado de erro
  } finally {
    setLoading(false); // Termina o estado de carregamento
  }
};

  return(
    <div>
      <a href="/">Login</a>
      <h2>Redefinir Senha</h2>
      <h3>Digite seu E-mail</h3>
      <form >
          <input
            type={email}
            placeholder="E-mail"
            name="email"
            value={email}
            onClick={HandleReset}
          /><br/><br/>
        <button type="submit">Enviar Link</button>
      </form>
    </div>
  );
}
export default ResetPassword;
