import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logopic } from "../Pic/Pic";
import useModal from "../ContextApi/Usemodal";
import { CgChevronDown } from "react-icons/cg";

const Header = () => {
  const location = useLocation(); // Get current route
  const { toggleModal } = useModal();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo and Brand */}
          <div className="d-flex align-items-center">
            <img 
              src={Logopic} 
              alt="Logo" 
              className="logo-img img-fluid"
              style={{ width: "40px", height: "40px" }}
            />
            <h3 className="heading-t m-0 ms-2">Food App</h3>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* Home Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/"
                  className={`nav-link custom-nav-link ${location.pathname === "/" ? "active" : ""}`}
                  onClick={toggleDropdown}
                >
                  Home
                  <CgChevronDown className="ms-1 chevron-icon" />
                </Link>
                <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                  <li><Link to="/option1" className="dropdown-item">Option 1</Link></li>
                  <li><Link to="/option2" className="dropdown-item">Option 2</Link></li>
                  <li><Link to="/option3" className="dropdown-item">Option 3</Link></li>
                </ul>
              </li>

              {/* Table Link */}
              <li className="nav-item">
                <Link
                  to="/table"
                  className={`nav-link custom-nav-link ${location.pathname === "/table" ? "active" : ""}`}
                >
                  Table
                </Link>
              </li>

              {/* Pricing Button */}
              <li className="nav-item">
                <button
                  onClick={toggleModal}
                  className="nav-link custom-nav-link"
                >
                  Pricing
                </button>
              </li>

              {/* Disabled Link */}
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
