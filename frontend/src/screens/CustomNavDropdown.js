import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const CustomNavDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const { i18n } = useTranslation();
  


  return (
    <NavDropdown
      title={i18n.t('Planche')}
      id="basic-nav-dropdown"
      show={isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item href="/Hybride">{i18n.t('Hybride')}</NavDropdown.Item>
      <NavDropdown.Item href="/Shortboard">
      Shortboard
      </NavDropdown.Item>
      <NavDropdown.Item href="/Longboard">Longboard</NavDropdown.Item>
      
    </NavDropdown>
  );
};

export default CustomNavDropdown;