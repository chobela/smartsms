import React, {Component} from 'react'
import {Link} from 'react-router-dom'


const Sidebar = (props) => {

const removeSession = () => {

sessionStorage.removeItem('token')
window.location.replace("/");


}

    return ( 
          
  <nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div className="scrollbar-inner">
      
      <div className="sidenav-header  align-items-center">
        <Link className="navbar-brand" href="javascript:void(0)">
         <h1>Smart SMS</h1>
        </Link>
      </div>
      <div className="navbar-inner">
        
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="ni ni-tv-2 text-primary"></i>
                <span className="nav-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                <i className="ni ni-circle-08 text-red"></i>
                <span className="nav-link-text">Contacts</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/schedule" className="nav-link" href="examples/map.html">
                <i className="ni ni-money-coins text-orange"></i>
                <span className="nav-link-text">Scheduler</span>
              </Link>
            </li>
             <li className="nav-item">
              <Link to="/tasks" className="nav-link" href="examples/map.html">
                <i className="ni ni-single-copy-04 text-green"></i>
                <span className="nav-link-text">Scheduled</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-link" href="examples/profile.html">
                <i className="ni ni-single-copy-04 text-green"></i>
                <span className="nav-link-text">Report</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/topup" className="nav-link" href="examples/tables.html">
                <i className="ni ni-fat-add text-default"></i>
                <span className="nav-link-text">Topup</span>
              </Link>
            </li>
              <li className="nav-item">
              <Link to="/profile" className="nav-link" href="examples/tables.html">
                <i className="ni ni-lock-circle-open text-default"></i>
                <span className="nav-link-text">Security</span>
              </Link>
            </li>
              <li className="nav-item">
              <Link to="/" onClick={removeSession} className="nav-link">
                <i className="ni ni-user-run text-default"></i>
                <span className="nav-link-text">Logout</span>
              </Link>
            </li>
           
          </ul>
       
        </div>
      </div>
    </div>
  </nav>
     );
}
 
export default Sidebar;