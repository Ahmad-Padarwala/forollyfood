import React from "react";
import "../CSS/App.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand ps-0 ps-lg-3" to="/">
              <img
                src={require("../Assets/images/logo.webp")}
                className="img-fluid w-100 nav-logo"
                alt="forolly-logo"
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto mt-5 mt-lg-0">
                <NavLink to="/" className="nav-link mx-2">
                  Home
                </NavLink>
                <NavLink to="/about" className="nav-link mx-2">
                  About Us
                </NavLink>
                <NavLink to="/products" className="nav-link mx-2">
                  Products
                </NavLink>
                <NavLink to="/inquiries" className="nav-link mx-2">
                  Inquiries
                </NavLink>
                <NavLink to="/contact" className="nav-link mx-2">
                  Contact Us
                </NavLink>
              </div>

              <a
                href={require("../Assets/newpdf.pdf")}
                target="_blank"
                rel="noreferrer noopener"
                className="lg-ms-5 ms-0 mt-2 lg-mt-0 me-3 px-4 py-2 d-lg-block cate-btn"
              >
                View Catalogue
              </a>
              <NavLink
                to="/admin"
                target="_blank"
                rel="noreferrer noopener"
                className="text-white m-0 p-0"
              >
                <i className="fa-solid fa-user-plus"></i>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
