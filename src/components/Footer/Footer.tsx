import "./Footer.scss";
// #TODO: change scss into module.scss or whatevr

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer__logo">NICE👌<br />GADGETS</div>
        <nav className="footer__nav">
          <ul>
            <li className="footer__nav__li text--uppercase">
              <a href="https://github.com/fe-mar23-undefined/product_catalog" target="_blank" className="footer__nav__link" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li className="footer__nav__li text--uppercase">
              <a href="/" className="footer__nav__link">
                Contacts
              </a>
            </li>
            <li className="footer__nav__li text--uppercase">
              <a href="/" className="footer__nav__link">
                Rights
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__backtotop">
          {/* TODO: make hrefs pull you up to site's top, zoooooooooom */}
          <a href="/" className="footer__backtotop__text text--small">Back to top</a>
          <a href="/" className="footer__backtotop__button">
            <svg className="footer__backtotop" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z" fill="currentColor" />
            </svg> 
          </a>
        </div>
      </div>
    </footer>
  )
}