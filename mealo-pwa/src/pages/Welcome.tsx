import React, {useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import ButtonMealo from "../components/ButtonMealo";
import "../css/Welcome.css";

function Welcome() {

  useEffect(() => {document.title = "Mealo - Votre assistant culinaire intelligent"})

  const navigate = useNavigate()
  const routeChange = () => {
    let path = "/Login"
    navigate(path)
  }

  return (
    <div className="container">
      <img className="ellipse" src="/src/assets/views/welcome/ellipse.png" alt="background" />
      <img className="pasta" src="/src/assets/views/welcome/pasta.png" alt="pasta" />
      <img className="salad" src="/src/assets/views/welcome/salad.png" alt="salad" />
      <img className="pepper" src="/src/assets/views/welcome/pepper.png" alt="pepper" />
      <img className="bread" src="/src/assets/views/welcome/bread.png" alt="bread" />
      <img className="tomato" src="/src/assets/views/welcome/tomato.png" alt="tomato" />
      <img className="mango" src="/src/assets/views/welcome/mango.png" alt="mango" />
      <div className="logo-title">
        <img className="logo" src="/src/assets/logo_mealo.png" alt="Logo Mealo" />
        <h1 className="title">Mealo</h1>
        <p className="slogan">Votre assistant culinaire intelligent</p>
        <ButtonMealo 
          buttonStyle="primary" 
          label="Démarrer" 
          style={{ marginTop: "50px" }} 
          onClick={routeChange}
        />
      </div>
    </div>
  );
}

export default Welcome;
