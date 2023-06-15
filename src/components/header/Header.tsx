import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useGlobalContext } from '../../context/GlobalContextProvider';



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites, cart } = useGlobalContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav__item is-active' : 'nav__item'
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/phones"
              className={({ isActive }) =>
                isActive ? 'nav__item is-active' : 'nav__item'
              }
            >
              PHONES
            </NavLink>

            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                isActive ? 'nav__item is-active' : 'nav__item'
              }
            >
              TABLETS
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive ? 'nav__item is-active' : 'nav__item'
              }
            >
              ACCESSORIES
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="header__section--1">
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            isActive ? 'nav__icon is-active' : 'nav__icon'
          }
        >
          <div className="header__element--heart">
            <img
              className="icon__heart"
              src={require('../../images/icons/Heart.svg').default}
              alt="Heart Icon"
            />
            {favourites.length > 0 && <span className="notification">{favourites.length}</span>}
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? 'nav__icon is-active' : 'nav__icon'
          }
        >
          <div className="header__element--cart">
            <img
              className="icon__cart"
              src={require('../../images/icons/Cart.svg').default}
              alt="Cart Icon"
            />
            {cart.length > 0 && <span className="notification">{cart.length}</span>}
          </div>
        </NavLink>


        <div className="header__element__list" onClick={toggleMenu}>
          <img
            className="icon__list"
            src={require('../../images/icons/List.svg').default}
            alt="List Icon"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className={`burger ${isMenuOpen ? 'burger--open' : ''}`}>
          <div className="header">

            <div className="header__section">
              <div className="header__wrapper">
                <div className="header__element">
                  NICE 👌
                  <br />
                  GADGETS
                </div>
              </div>
            </div>
        
            <div className="header__section--1">
              <div className="header__element__list" onClick={toggleMenu}>
                <img
                  className="icon__x"
                  src={require('../../images/icons/x.svg').default}
                  alt="List Icon"
                />
              </div>
            </div>
          </div>

          <div className="burger__links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
              onClick={toggleMenu}
            >
              HOME
            </NavLink>

            <NavLink
              to="/phones"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
              onClick={toggleMenu}
            >
              PHONES
            </NavLink>

            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
              onClick={toggleMenu}
            >
              TABLETS
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
              onClick={toggleMenu}
            >
              ACCESSORIES
            </NavLink>
          </div>

          <div className="burger__bottom">
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive ? 'burger__bottom__box is-active' : 'burger__bottom__box'
              }
            >
              <div className="burger__element--heart" onClick={toggleMenu}>
                <img
                  className="icon__heart"
                  src={require('../../images/icons/Heart.svg').default}
                  alt="Heart Icon"
                />
                {favourites.length > 0 && <span className="notification">{favourites.length}</span>}
              </div>
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'burger__bottom__box burger__bottom__box--1 is-active' : 'burger__bottom__box burger__bottom__box--1'
              }
            >
              <div className="burger__element--cart" onClick={toggleMenu}>
                <img
                  className="icon__cart"
                  src={require('../../images/icons/Cart.svg').default}
                  alt="Cart Icon"
                />
                {cart.length > 0 && <span className="notification">{cart.length}</span>}
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
