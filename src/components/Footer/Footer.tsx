import "./Footer.scss";
// #TODO: change scss into module.scss or whatevr

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer__logo">NICE👌<br/>GADGETS</div>
        <nav>
          <ul className="footer__nav">
            <li className="footer__nav__link">GitHub</li>
            <li className="footer__nav__link">Contacts</li>
            <li className="footer__nav__link">Rights</li>
          </ul>
        </nav>
        <div className="footer__backtotop">
          <a href="#top" className="footer__backtotop__text">Back to top</a>
          <a href="#top" className="footer__backtotop__button">&#62;</a>
        </div>
    </footer>
  )
}