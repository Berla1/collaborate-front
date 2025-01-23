import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Perfil from "./pages/Perfil";

function AppRoutes() {
  return (
    <div className="bg-[#383838]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
