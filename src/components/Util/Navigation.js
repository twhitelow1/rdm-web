import React from "react";
import { Link } from 'react-router-dom';

function Navigation({navbarTransparent}) {
  return (
    <nav className={`navbar navbar-expand-lg ${navbarTransparent ? '' : 'navbar-colored'}`}>
    <div className="container" style={{justifyContent: 'center !important'}}>
        <Link className="navbar-brand" to="/">
            <img src="images/layout/rdm-logo.png" alt="logo" className="img-fluid" />
        </Link>
        


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="/#about">About</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="/#properties">Properties</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="/#rentals">Rentals</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link click-scroll" href="/#contact">Contact</a>
                </li>
            </ul>

             {/* <a href="ticket.html" class="btn custom-btn d-lg-block d-none">View Homes</a>  */}
        </div>
    </div>
</nav>
  );
}

export default Navigation;