import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return ( 
        <footer className="footer pt-0">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6">
           
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
             
              <li className="nav-item">
                <Link href="https://app-express.net" className="nav-link" target="_blank">App Express</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;