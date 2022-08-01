import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recruitment from "./components/Recruitment";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navber from "./components/Navber";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Navber isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/recruitment" element={<Recruitment />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
