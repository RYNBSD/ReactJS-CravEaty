export default function Navbar() {
  return (
    <nav className="nav container f-center">
      <div className="nav__logo">
        <img className="nav__logo-img" src="/assets/Logo.png" alt="logo" />
      </div>
      <ul className="nav__list f-center">
        <li className="nav__list-item">
          <a className="nav__list-item_link" href="#home">
            home
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item_link" href="#about">
            about
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item_link" href="#recipes">
            recipes
          </a>
        </li>
        <li className="nav__list-item">
          <a className="nav__list-item_link" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
