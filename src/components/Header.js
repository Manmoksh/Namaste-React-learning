import logo from "../public/logo.jpg";
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us </a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
