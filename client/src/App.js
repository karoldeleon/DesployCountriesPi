import './App.css';
import LandingPage from '../src/views/LandingPage/LandingPage'
import Home from '../src/views/Home/Home'
import Detail from '../src/views/Detail/Detail'
import Form from '../src/views/Form/Form'
import NotFound from '../src/views/No Found/NoFound'
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route, useLocation } from "react-router-dom";
import axios from 'axios';
<<<<<<< HEAD
axios.defaults.baseURL = "https://desploycountriespi-production.up.railway.app";
=======
axios.defaults.baseURL = "https://desploycountriespi-production.up.railway.app/";

>>>>>>> aa5e91ab1344efe65ba1012bfce9ab6794edd859

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/countries/:id" element={<Detail />} />
        <Route exact path="/form" element={<Form/>} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} /> *
      </Routes>
    </div>
  );
}

export default App;
