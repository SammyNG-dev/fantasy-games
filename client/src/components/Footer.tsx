import facebook from "../assets/images/facebook.png";
import x from "../assets/images/twitter.png"
function Footer() {
  return (
    <footer className="footer">
      <h2 className="julee-regular">© 2024 THE FANTASY WARRIORS</h2>
      <div className="imagesRS">
        <a href="https://www.facebook.com/">
          <img id="facebook" src={facebook} alt="facebook" />
        </a>
        <a href="https://x.com/">
          <img id="twitter" src={x} alt="twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
