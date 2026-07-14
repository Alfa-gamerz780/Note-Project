import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="home-pg">
      <Toaster />
      <Outlet />
    </div>
  );
}

export default App;
