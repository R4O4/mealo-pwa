import ButtonMealo from "../components/ButtonMealo";
import "../css/Login.css"

function Login() {
    return (
        <div className="loginContainer">
            <span className="loginEllipse"></span>
            <img src="../src/assets/logo_mealo.svg" alt="Logo Mealo" className="loginLogo"/>
            <form action="" className="loginForm">
                <h1 className="loginTitle">Connexion</h1>
                <div className="loginInputContainer">
                    <p>Email</p>
                    <input type="text" />
                </div>
                <div className="loginInputContainer">
                    <p>Mot de passe</p>
                    <input type="text" />
                </div>

                <ButtonMealo buttonStyle="lightGreen" label="Connexion" style={{zIndex: 1, width: "100%", marginTop: "40px", fontWeight: 600}}></ButtonMealo>
                <span className="whiteLine"></span>
                <ButtonMealo buttonStyle="darkGreen" label="Créer un compte" style={{zIndex: 1, width: "100%"}}></ButtonMealo>
            </form>
        </div>
    )
}

export default Login;