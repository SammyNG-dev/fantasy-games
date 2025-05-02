import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";
import successSound from "/src/assets/final-fantasy-vii-victory-fanfare-1.mp3"; // Import du fichier audio
import login from "../assets/images/login.png"
import dragon_offline from "../assets/images/dragon_offline.png"
import dragon_online from "../assets/images/dragon_online.png"

const usersData = [
  { username: "Samy", password: "Samy123" },
  { username: "Eric", password: "Eric123" },
  { username: "Seb", password: "Seb123" },
  { username: "Sims", password: "Sims123" },
];

function Login() {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const navigate = useNavigate();

  // Fonction de validation des identifiants
  const validateCredentials = (username: string, password: string): boolean => {
    // Vérifie si le nom d'utilisateur et le mot de passe correspondent à un utilisateur dans les données simulées deux paramètres obligatoires
    return usersData.some(
      (user) => user.username === username && user.password === password,
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username && password) {
      if (validateCredentials(username, password)) {
        const audio = new Audio(successSound); // Crée une nouvelle instance Audio
        audio.play(); // Joue le son
        setIsOnline(!isOnline);
        alert("Connection successfull !");
        navigate("/games");
      } else {
        alert("Username : Samy\nPassword : Samy123")
      }
    } else {
      alert("Username : Samy\nPassword : Samy123")
    }
  };

  

  return (
    <div className="div-form">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <h2>Username</h2>
        <input
          type="text"
          className="username"
          value={username}
          defaultValue="Samy"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          className="password"
          value={password}
          defaultValue="Samy123"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button-login" type="submit">
          <img
            className="login-logo"
            src={login}
            alt="Logo de connexion"
          />
        </button>
      </form>

      <div className="status">
        {isOnline ? (
          <div id="online-status">
            <img src={dragon_online} alt="dragon_vert" />
            <p>Online</p>
          </div>
        ) : (
          <div id="offline-status">
            <img
              src={dragon_offline}
              alt="dragon_rouge"
            />
            <p>Offline</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
