import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Pastes from "../Components/Pastes";
import Home from "../Components/Home";
import NewNote from "../Components/NewNote";
import Navbar from "../Components/Navbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div style={{
      backgroundColor: 'black',
      maxHeight: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      }}>
      <Navbar/>
      <Home />
    </div>
  },
  {
    path: "/pastes",
    element:  <div style={{
      backgroundColor: 'black',
      maxHeight: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      }}>
      <Navbar/>
      <Pastes/>
    </div>
  },

  {
    path: "/newNote",
    element:  <div style={{
      backgroundColor: 'black',
      maxHeight: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      }}>
      <Navbar/>
      <NewNote />
    </div>
  },
  {
    path: "/newNote/:id",
    element:  <div style={{
      backgroundColor: 'black',
      maxHeight: '100%',
      minHeight: '100vh',
      overflow: 'hidden',
      }}>
      <Navbar/>
      <NewNote />
    </div>
  },
]);

export default router;