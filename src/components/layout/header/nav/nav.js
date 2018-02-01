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
                <li><a data-toggle="elementscroll" href="#home">Accueil</a></li>
                <li><a data-toggle="elementscroll" href="#menu">Menu</a></li>
                <li><a data-toggle="elementscroll" href="#gallery">Nos produits</a></li>
                <li><a data-toggle="elementscroll" href="#reference">Références</a></li>
                <li><a data-toggle="elementscroll" href="#contact">Contact</a></li>
              </ul>
            </div>
            
          </div>
        </nav>
    )
}

export default Nav;