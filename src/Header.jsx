import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-logo">
          <a href="/">Brand</a>
        </div>

        <div className="nav-links-desktop">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="cta-desktop">
          <a href="#signup" className="cta-button">
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
