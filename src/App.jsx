import './App.css'
import Dashboard from "./assets/components/Login/Dashboard.jsx";
import Login from "./assets/components/Login/Login.jsx";
import {Route, Routes} from "react-router-dom";
import Register from "./assets/components/Login/Register.jsx";
import ResetPassword from "./assets/components/Login/ResetPassword.jsx";
import Logout from "./assets/components/Login/Logout.jsx";
import Edit from "./assets/components/Login/Edit.jsx";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
