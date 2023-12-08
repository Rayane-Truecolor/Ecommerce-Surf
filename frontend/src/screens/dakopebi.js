import React, { useContext, useState } from 'react';

import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Button,
  ButtonGroup,
  Badge,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../Store';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LanguageSelector from '../components/Trad/LanguageSelector';
import { useTranslation } from 'react-i18next';
import Search from '../components/Search';
import sac from './Image_Screen/sac.png';
import user from './Image_Screen/user.png';
import CustomNavDropdown from './CustomNavDropdown';
import CustomNavDropdown2 from './CustomNavDropdown2';

import { FlagIcon, US, FR, GB } from 'react-flag-kit';





const NavbarComponent = () => {
 

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
if(window.scrollY >= 80) {
  setNavbar(true)
} else {
  setNavbar(false);
}
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className="d-flex flex-column site-container">
      <Navbar className={navbar ? 'navbar active' : 'navbar'}>
        <Container>
          <LinkContainer to="/" className="logoo">
            <Navbar.Brand>Da'Wave</Navbar.Brand>
          </LinkContainer>
          <Nav className="m-auto">


 {/* Boutton PLANCHE */}

          <CustomNavDropdown className="button_Navbar"/>
            {/* Ajout d'un élément span pour créer la séparation */}
            <Nav.Link
              href="/Derive"
              className="button_Navbar"
              
            >
              {i18n.t('Dérive')}
            </Nav.Link>

            <Nav.Link
              href="/Pads"
              className="button_Navbar2"
            
            >
              {i18n.t('Pads')}
            </Nav.Link>
           
              {/* Ajout de la classe "no-border-button" */}
              <CustomNavDropdown2 className="button_Navbar"/>
          </Nav>
          <div className="vide">  </div>
          <Nav className="me-auto">

             {/* Sign in / Sign out */}
            <div className="Signin_out">
              {userInfo ? (
                <NavDropdown
                  title={
                    <div>
                      <img
                        src={user}
                        alt="User"
                        style={{ color: 'white', width: '40px' }}
                      />
                      Bienvenue {userInfo.name} !
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>{i18n.t('Profil')}</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/orderhistory">
                    <NavDropdown.Item>{i18n.t('Historique')}</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="/signout"
                    onClick={signoutHandler}
                    style={{ color: 'red', textDecoration: 'none' }}
                  >
                    {i18n.t('Deconnecter')}
                  </Link>
                </NavDropdown>
              ) : (
                <>
                  <Link
                    className="nav-link"
                    to="/signin"
                    style={{ color: 'rgb(6, 39, 110)', textDecoration: 'none' }}
                  >{i18n.t('Connexion')}</Link>
            
                  <Link
                    className="nav-link"
                    to="/signup"
                    style={{ color: 'rgb(6, 39, 110)', textDecoration: 'none' }}
                  >
                    {i18n.t('Inscrire')}
                  </Link>
                </>
              )}

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="admin-nav-dropdown">
                  <LinkContainer to="/admin/dashboard">
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </div>

                         {/* FIN Sign in / Sign out */}


            <Link to="/CartScreen" className="nav-link">
              <span className="cart-icon">
                {' '}
                <img src={sac} alt="Sac à main" style={{ color: 'white' }} />
              </span>{' '}
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>

          <Search />
          <div className="language-selector">
            <button
              className="toggle-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {i18n.t('Langage')}
            </button>
            {isOpen && (
              <div className="language-dropdown">
                <button onClick={() => changeLanguage('en')}> <FlagIcon code="GB" /> English</button>
                <button onClick={() => changeLanguage('fr')}><FlagIcon code="FR" /> Français</button>
                {/* Ajoutez d'autres boutons pour d'autres langues si nécessaire */}
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
