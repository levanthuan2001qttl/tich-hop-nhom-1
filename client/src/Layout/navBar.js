import React from "react";
import "./navBar.css";
export const NavBar = () => {
  return (
    <div id="navbar">
      <div className="navigation-example">
        <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#pablo">
                Primary color
              </a>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="example-navbar-primary"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#pablo">
                    <i className="now-ui-icons objects_globe"></i>
                    <p>Discover</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pablo">
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pablo">
                    <i className="now-ui-icons ui-1_settings-gear-63"></i>
                    <p>Settings</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
