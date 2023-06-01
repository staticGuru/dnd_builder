import React from "react";
import { Link } from "react-router-dom";
import SideNavBar from "./SideNavBar";
import MasterTemplates from "./MasterTemplates";

const Navbar = () => {
  return (
    <>
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-md navbar-info bg-light mt-4">
          <div className="container-fluid">
            <a className="navbar-brand text-dark font-bold" href="#">
              Build Model
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-black" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0 offset-7">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/MasterTemplates"
                  >
                    Home /
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/CreateNewTemplate"
                  >
                    Create A New Template
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
