import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  const HandleLogout = async (e) => {

    fetch.post(

        `http://127.0.0.1:8000/api/auth/logout${user.id}`, {},
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          },
        }
      )
  .then(response => {
      console.log('Logout realizado com sucesso', response);
        navigate('/Login');
  }
  )};
    return (
      <div>
        <button onClick={HandleLogout}>Logout</button>
      </div>
    )
}
export default Logout
