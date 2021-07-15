import React, {useContext, useState, useEffect} from 'react'
import {xContext} from './UserContext';

const Header = () => {

  const user  = useContext(xContext);



    return ( 
           
    <div className="header bg-primary pb-6">
      <div className="container-fluid">
        <div className="header-body">
         
          
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
               
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Contacts</h5>
                      <span className="h2 font-weight-bold mb-0">{user.contacts}</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i className="ni ni-circle-08"></i>
                      </div>
                    </div>
                  </div>
                    <p className="mt-3 mb-0 text-sm">
                    
                    <span className="text-nowrap">All contacts</span>
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
                
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Scheduled</h5>
                      <span className="h2 font-weight-bold mb-0">{user.tasks}</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i className="ni ni-money-coins"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                
                    <span className="text-nowrap">Scheduled messages</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
                
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Delivered</h5>
                      <span className="h2 font-weight-bold mb-0">{user.success}</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i className="ni ni-send"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                    
                    <span className="text-nowrap">Total messages sent</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card card-stats">
               
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h5 className="card-title text-uppercase text-muted mb-0">Failed</h5>
                      <span className="h2 font-weight-bold mb-0">{user.failed}</span>
                    </div>
                    <div className="col-auto">
                      <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i className="ni ni-fat-remove"></i>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 mb-0 text-sm">
                  
                    <span className="text-nowrap">Failed messages</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     );
}
 
export default Header;