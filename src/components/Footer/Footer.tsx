import "./Footer.scss";
// #TODO: change scss into module.scss or whatevr

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer__logo">NICE👌<br/>GADGETS</div>
        <nav className="">
          <ul className="footer__nav">
            <li className="footer__nav__li">
              <a href="https://github.com/fe-mar23-undefined/product_catalog" className="footer__nav__link">
                GitHub
              </a>
            </li>
            <li className="footer__nav__li">
              <a href="" className="footer__nav__link">
                Contacts
              </a>
            </li>
            <li className="footer__nav__li">
              <a href="" className="footer__nav__link">
                Rights
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__backtotop">
          <a href="#index" className="footer__backtotop__text">Back to top</a>
          <a href="#index" className="footer__backtotop__button">&#62;</a>
        </div>
    </footer>
  )
}