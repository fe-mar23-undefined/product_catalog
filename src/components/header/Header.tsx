import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            >
              <div className="burger__link" onClick={toggleMenu}>HOME</div>
            </NavLink>

            <NavLink
              to="/phones"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
            >
              <div className="burger__link" onClick={toggleMenu}>PHONES</div>
            </NavLink>

            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
            >
              <div className="burger__link" onClick={toggleMenu}>TABLETS</div>
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive ? 'burger__item is-active' : 'burger__item'
              }
            >
              <div className="burger__link" onClick={toggleMenu}>ACCESSORIES</div>
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
                </div>
              </NavLink>

              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? 'burger__bottom__box burger__bottom__box--1 is-active' : 'burger__bottom__box--1'
                }
              >
                <div className="burger__element--cart" onClick={toggleMenu}>
                  <img
                    className="icon__cart"
                    src={require('../../images/icons/Cart.svg').default}
                    alt="Cart Icon"
                  />
                </div>
              </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
