import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // substitutions made for icons only available with FontAwesome Pro

const Header = ({ message, display }) => (
    <div>
        <div id="appHeader">
            <span id="nav-bars"><FontAwesomeIcon icon={faBars} size="lg" /></span>
            <span className="app-logo"><img id="appLogo" src="favicon.png" /></span>
        </div>
        <div className="header-spacer"></div>
        {display == true && <div className="app-message"><h4>{message}</h4></div>}
    </div>
);

export default Header;