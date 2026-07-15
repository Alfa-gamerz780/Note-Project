import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="home-pg">
      
      <Outlet />
    </div>
  );
}

export default App;
