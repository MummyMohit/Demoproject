import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logopic } from '../Pic/Pic';
import useModal from '../ContextApi/Usemodal';
import { CgChevronDown } from "react-icons/cg";
const Header = () => {
  const location = useLocation(); // Get current route
  const { toggleModal } = useModal();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo */}
          <img src={Logopic} alt="Logo" style={{ width: '50px', height: '50px' }} />
          <h3 className="heading-t">Food App</h3>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Use ms-auto to push the navbar items to the right */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link custom-nav-link { ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                  <CgChevronDown
                    style={{ color: 'red' }}
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/table"
                  className={`nav-link custom-nav-link { ${location.pathname === '/table' ? 'active' : ''}`}
                >
                  Table
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={toggleModal}
                  className={` nav-link custom-nav-link-d`}
                >
                  Pricing
                </button>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="nav-link disabled"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
