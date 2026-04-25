import React from "react";

const Navbar = () => {
  return (
   
      <nav class="navbar navbar-expand-lg bg-light navbar-light bg-light border-bottom border">
        <div class="container py-3">
          <a class="navbar-brand" href="#">
            <img src="logo.svg" className="" style={{width : "25%" }} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
            <form class="d-flex">
              <ul class="navbar-nav  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                 Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
               <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                 Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                 Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                 Support
                </a>
              </li>
              
                 
            </ul>
            </form>
          </div>
        </div>
      </nav>

  );
};

export default Navbar;
