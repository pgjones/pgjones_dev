import {
  faBlog,
  faChalkboard,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

import Github from "./Github";
import Gitlab from "./Gitlab";
import Medium from "./Medium";
import Stackoverflow from "./Stackoverflow";
import Twitter from "./Twitter";

import avatar from "src/MeSudbury.jpeg";

const Nav = () => {
  const [expand, setExpand] = React.useState(false);
  const location = useLocation();

  return (
    <header className="header text-center">
      <div className="force-overflow">
        <h1 className="blog-name pt-lg-4 mb-0">
          <NavLink to="/">P G Jones</NavLink>
        </h1>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navigation"
            aria-label="Toggle navigation"
            onClick={() => setExpand(value => !value)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse flex-column ${
              expand ? "show" : ""
            }`}
          >
            <div className="profile-section pt-3 pt-lg-0">
              <img
                className="profile-image mb-3 rounded mx-auto"
                src={avatar}
                alt="image"
              />

              <div className="bio mb-3">
                Hi, my name is Philip Jones. Welcome to my personal website!
              </div>
              <ul className="social-list list-inline py-2 mx-auto">
                <li className="list-inline-item">
                  <a href="https://github.com/pgjones">
                    <Github />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://gitlab.com/pgjones">
                    <Gitlab />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://medium.com/@pgjones">
                    <Medium />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/pdgjones">
                    <Twitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://stackoverflow.com/users/9231401/pgjones">
                    <Stackoverflow />
                  </a>
                </li>
              </ul>

              <hr />
            </div>

            <ul className="navbar-nav flex-column text-left">
              <li
                className={`nav-item ${
                  location.pathname === "/info/" ? "active" : ""
                }`}
              >
                <NavLink to="/info/" className="nav-link">
                  <FontAwesomeIcon
                    className="svg-inline--fa fa-w-14 fa-fw mr-2"
                    icon={faUser}
                  />
                  About Me
                </NavLink>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                <NavLink to="/" className="nav-link">
                  <FontAwesomeIcon
                    className="svg-inline--fa fa-w-14 fa-fw mr-2"
                    icon={faLaptopCode}
                  />
                  Open Source
                </NavLink>
              </li>
              <li
                className={`nav-item ${
                  location.pathname.startsWith("/blog/") ? "active" : ""
                }`}
              >
                <NavLink to="/blog/" className="nav-link">
                  <FontAwesomeIcon
                    className="svg-inline--fa fa-w-14 fa-fw mr-2"
                    icon={faBlog}
                  />
                  Blog
                </NavLink>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/talks/" ? "active" : ""
                }`}
              >
                <NavLink to="/talks/" className="nav-link">
                  <FontAwesomeIcon
                    className="svg-inline--fa fa-w-14 fa-fw mr-2"
                    icon={faChalkboard}
                  />
                  Talks
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
