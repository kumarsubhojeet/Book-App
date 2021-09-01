import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          SBOOKS
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
         
        <ul class="navbar-nav ml-auto">
            
            <li class="nav-item">
              <Link class="nav-link" to="/Search">
                Search Books
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/BookById">
                Search Specific Book
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
}
