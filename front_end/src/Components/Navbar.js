import React from "react";

const Navbar = () => {
  return (
    <>

  <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid d-flex justify-content-between">
    <a className="navbar-brand text-white" href="/">Pair Programming</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-white" href="/">Slots</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/sessions">Sessions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Account</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>


{/*
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand text-white" href="/">
          Pair Programming App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="/sessions">
                  Coding Sessions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    */}
    </>
  );
};

export default Navbar;
