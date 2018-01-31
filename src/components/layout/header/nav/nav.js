import React from 'react';

const Nav = () => {
    return (
		<nav id="nav-primary" className="navbar navbar-custom" >
          <div className="container">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a href="index.html"><img src="img/logo.png" alt="logo"/></a>
            </div>
    
            <div className="collapse navbar-collapse" id="nav">
              <ul className="nav navbar-nav navbar-right uppercase">
                <li><a data-toggle="elementscroll" href="#info">About</a></li>
                <li><a data-toggle="elementscroll" href="#speakers">Speakers</a></li>
                <li><a data-toggle="elementscroll" href="#program">Program</a></li>
                <li><a data-toggle="elementscroll" href="#venue">Venue</a></li>
                <li><a data-toggle="elementscroll" href="#register">Register</a></li>
                <li><a data-toggle="elementscroll" href="#gallery">Gallery</a></li>
                <li><a data-toggle="elementscroll" href="#sponsors">Sponsors</a></li>
                <li><a data-toggle="elementscroll" href="#footer">Contact</a></li>
              </ul>
            </div>
            
          </div>
        </nav>
    )
}

export default Nav;