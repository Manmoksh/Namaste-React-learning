import { useEffect, useState } from "react";
import logo from "../public/logo.jpg";
function Header() {
  const [btnName, setBtnName] = useState("Login");
  // if no dependency array =>useEffect called at every render
  //if dependency error is empty =>useEffect called once on initial render
  // if something in depenedency array => useEffect is called when btnRect change
  // useEffect(() => {}, [btnRect]);
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
