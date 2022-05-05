import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import avatar from "../assets/img/avatar.jfif";
import hr from "../assets/img/hr.png";
import pr from "../assets/img/pr.png";
const SideBar = () => {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
        <i className="fas fa-bars"></i>
      </Link>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <Link to="#">pro sidebar</Link>
            <div id="close-sidebar">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img alt="" className="img-responsive img-rounded" src={avatar} />
            </div>
            <div className="user-info">
              <span className="user-name">
                Phương
                <strong> Chi </strong>
              </span>
              <span className="user-role">Administrator</span>
              <span className="user-status">
                <span>Online</span>
              </span>
            </div>
          </div>

          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control search-menu"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li className="sidebar-dropdown">
                <Link to="/hr">
                  <img
                    src={hr}
                    alt=""
                    style={{ width: "30px", marginRight: "12px" }}
                  />
                  <span>Human resources</span>
                </Link>
              </li>
              <li className="sidebar-dropdown">
                <Link to="/pr">
                  <img
                    src={pr}
                    alt=""
                    style={{ width: "30px", marginRight: "12px" }}
                  />
                  <span>Payroll</span>
                </Link>
              </li>
              <li className="sidebar-dropdown">
                <Link to="/manager">
                  <i className="fa fa-tachometer-alt"></i>
                  <span>Manager</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;
