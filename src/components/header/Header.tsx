import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => (
  <div className="header">
    <div className="header__section">
      <div className="header__wrapper">
        <div className="header__element">
          NICE 👌
          <br />
          GADGETS
        </div>
        <nav className="nav">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'nav__item is-active' : 'nav__item'
            }
          >
            <div className="header__element__text">HOME</div>
          </NavLink>

          <NavLink
            to="/phones"
            className={({ isActive }) =>
              isActive ? 'nav__item is-active' : 'nav__item'
            }
          >
            <div className="header__element__text">PHONES</div>
          </NavLink>

          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              isActive ? 'nav__item is-active' : 'nav__item'
            }
          >
            <div className="header__element__text">TABLETS</div>
          </NavLink>

          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              isActive ? 'nav__item is-active' : 'nav__item'
            }
          >
            <div className="header__element__text">ACCESSORIES</div>
          </NavLink>
        </nav>
      </div>
    </div>
    <div className="header__section--1">
      <div className="header__element--heart">
        <img
          className="icon__heart"
          src={require('../../images/icons/Heart.svg').default}
          alt="Heart Icon"
        />
      </div>
      <div className="header__element--cart">
        <img
          className="icon__cart"
          src={require('../../images/icons/Cart.svg').default}
          alt="Cart Icon"
        />
      </div>
      <div className="header__element__list">
        <img
          className="icon__list"
          src={require('../../images/icons/List.svg').default}
          alt="List Icon"
        />
      </div>
    </div>
  </div>
);

</div>