import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

const LogoImage = styled.img`
  height: 24px;
`;

const Header = () => (
  <div className="navbar navbar-dark bg-dark navbar-expand-sm">
    <div className="container">
      <Link to="/" className="navbar-brand">
        <LogoImage src={logo} alt="Logo" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Test 1
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test2">
            Test 2
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/test3">
            Test 3
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
