import style from "./App.module.css";
import Cards from "./componentes/Cards/Cards";
import Nav from "./componentes/Navabr/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import About from "./componentes/About/About";
import Detail from "./componentes/Detail/Detail";
import { Route, Routes } from "react-router-dom";
import Form from "./componentes/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Favoritos from "./componentes/Favoritos/favoritos";
const email = "jeremingolla03@gmail.com"
const password = "belgrano2012"
const App = () => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate =  useNavigate();
  const login = (userData) =>{
    if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('./home');
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  const onClose = (id) => {
    const characterfilter = characters.filter(
      (personaje) => personaje.id !== Number(id)
    );
    setCharacters(characterfilter);
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  return (
    <div className={style.app}>
      <div>
        {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detaild/:id" element={<Detail />} />
          <Route path="/favoritos" element ={<Favoritos/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
