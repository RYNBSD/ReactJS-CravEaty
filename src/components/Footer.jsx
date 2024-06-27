export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__container-media f-center">
          <img src="/assets/Logo.png" alt="logo" />
          <p>Craveaty, 2021, All Rights Reserved.</p>
          <div className="f-center">
            <i className="bx bxl-facebook-square"></i>
            <i className="bx bxl-instagram-alt"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-google"></i>
          </div>
        </div>
        <div className="footer__container-subscribe f-center">
          <h2>SUBSCRIBE & GET FREE PERKS</h2>
          <form className="f-center">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className="footer__container-nav">
          <ul>
            <li>
              <h1>Menu</h1>
            </li>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#recipes">recipes</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
