import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Layout/sideBar";
import logo from "../../assets/img/logo.png";

const Frame = ({ children }) => {
  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <nav
          className="navbar navbar-expand-lg  navbar-light bg-light"
          style={{ height: "60px" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={logo} alt="" style={{ height: "60px" }} />
            </Link>

            <button className="navbar-toggler" type="button">
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Statistics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Revenue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Frame;
