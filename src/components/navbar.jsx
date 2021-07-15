import React, { useContext } from 'react'
import {xContext} from './UserContext'

const Navbar = () => {

  const user  = useContext(xContext);

    return ( 

    <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <form className="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-search"></i></span>
                </div>
                <input className="form-control" placeholder="Search" type="text"></input>
              </div>
            </div>
            <button type="button" className="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </form>

          <ul className="navbar-nav align-items-center  ml-md-auto ">
            <li className="nav-item d-xl-none">
              
              <div className="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </li>
            <li className="nav-item d-sm-none">
              <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                <i className="ni ni-zoom-split-in"></i>
              </a>
            </li>
           
           <li className="nav-item">
          <button type="button" className="btn btn-default">
  <span>CREDIT</span>
  <span className="badge badge-primary">{user.balance}</span>
</button>
           </li>

  
          </ul>

        </div>
      </div>
    </nav>
     );
}
 
export default Navbar;