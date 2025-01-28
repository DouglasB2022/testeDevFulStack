import {useNavigate} from "react-router-dom";

const useRoutes = () => {
  const navigate = useNavigate();

  return {
    goToLogin: () => navigate("/login"),
    goToDashboard: () => navigate("/Dashboard"),
    goToUserList: () => navigate("/user-list"),
    goToRegister: () => navigate("/register"),
    goToHome: () => navigate("/login"),
    goEdit: () => navigate('/edit'),
    goBack: () => navigate(-1),
    goReset: () => navigate("/reset"),
    goLogout: () => navigate('logout')
  };
};

export default useRoutes;
