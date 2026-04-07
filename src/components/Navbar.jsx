import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <h1 className="logo">AI School</h1>

        <div className="nav-links">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="cta-btn">Book Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;