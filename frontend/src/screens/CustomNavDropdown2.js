import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const CustomNavDropdown2 = () => {
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
      title={i18n.t('Accessoire')}
      id="basic-nav-dropdown"
      
      show={isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavDropdown.Item href="#action/3.1">{i18n.t('Combinaison')}</NavDropdown.Item>
      <NavDropdown.Item href="/Leash">
      Leash
      </NavDropdown.Item>
      <NavDropdown.Item href="/Wax">Wax</NavDropdown.Item>
      <NavDropdown.Item href="/GoPro">
      Camera
      </NavDropdown.Item>
    </NavDropdown>
  );
};

export default CustomNavDropdown2;