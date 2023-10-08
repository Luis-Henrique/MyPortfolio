import React from 'react';
import './css/FooterStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h2 className="centered-title">Entre em Contato</h2>
        <p className="contact-icons">
          <FontAwesomeIcon icon={faEnvelope} /> henriqueluis3104@hotmail.com
          <FontAwesomeIcon icon={faPhone} /> (11) 97282-5931
          <FontAwesomeIcon icon={faMapMarker} /> São Paulo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
