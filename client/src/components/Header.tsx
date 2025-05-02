import { Link } from "react-router-dom";
import { useIsOnline } from "../contexts/IsOnlineContext"; // Import du contexte
import header_logo from "../assets/images/header.png"
import home from "../assets/images/Home.png"
import favorites from "../assets/images/Favorites.png"
import logout from "../assets/images/Logout.png"
import dragon_online from "../assets/images/dragon_online.png"

function Header() {
  const { isOnline } = useIsOnline(); // Récupère le statut en ligne

  return (
    <header>
      <div id="logo">
        <img src={header_logo} alt="logo" />
      </div>
      <nav id="nav">
        <Link to="/games">
          <img id="home" src={home} alt="Home" />
        </Link>
        <Link to="/favorites">
          <img
            id="favorites"
            src={favorites}
            alt="Favorites"
          />
        </Link>
        <Link to="">
          <img id="logout" src={logout} alt="Logout" />
        </Link>
      </nav>
      <div className="status">
        {/* Affichage conditionnel du statut en ligne */}
        {isOnline ? (
          <div id="online-status">
            <img src={dragon_online} alt="dragon_vert" />
            <p>Online</p>
          </div>
        ) : (
          <div id="offline-status">
            <img
              src="src\assets\images\dragon_offline.png"
              alt="dragon_rouge"
            />
            <p>Offline</p>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
